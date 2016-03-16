import Ember from 'ember';

const { Rx } = window;

export default Ember.Route.extend({
  model: function() {
    let controller = this.controllerFor('question');
    let level = controller.get('level');
    let excludeList = controller.get('score.excludeList');

    return this.store.queryRecord('questioncountry', {
      difficultyLevel: level,
      excludeList: excludeList
    });      
  },

  afterModel: function() {
    console.log('afterModel!')
    let gamedefController = this.controllerFor('gamedef');
    let playerName = gamedefController.get('score.name');

    let controller = this.controllerFor('question');
    controller.set('score.name', playerName);
    controller.set('bonus', 20);

    let s = controller.get('bonusObservable').subscribe((x) => {
      controller.set('bonus', x);
    });
    controller.set('bonusSubscription', s);    
  },  

  resetScore: function(controller) {
    controller.set('score.total', 0);
    controller.set('score.count', 1);
    controller.set('score.mistakes', 0);
    controller.set('score.excludeList', '');
  },
    
  actions: {
    willTransition: function(transition) {
      if (transition.targetName === 'gamedef') {
        let controller = this.controllerFor('question');
        let name = controller.get('score.name');
        let questionCount = controller.get('score.count');
        let mistakeCount = controller.get('score.mistakes');
        let score = controller.get('score.total');
        if (score > 0) {      
          this.store.createRecord('gameresult', {
            name: name,
            questionCount: questionCount,
            mistakeCount: mistakeCount,
            score: score
          });      
        }
        this.resetScore(controller);
      }
      return true;
    }, 
    
    invalidateModel() {
      this.refresh();
    }
  }
});