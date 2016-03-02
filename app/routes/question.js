import Ember from 'ember';

const { Rx } = window;

export default Ember.Route.extend({
  model: function() {
    let controller = this.controllerFor('question');
    let level = controller.get('level');
    return this.store.queryRecord('questioncountry', { difficultyLevel: level });      
  },

  activate: function() {    
    let gamedefController = this.controllerFor('gamedef');
    let doStartGame = gamedefController.get('doStartGame');
    if (doStartGame) {
      gamedefController.set('doStartGame', false); // hack to make F5 refresh possible on question page.
      let playerName = gamedefController.get('score.name');
      let controller = this.controllerFor('question');
      controller.set('score.total', 0);
      controller.set('score.count', 1);
      controller.set('score.mistakes', 0);
      controller.set('score.name', playerName);
      debugger;
      var src = Rx.Observable.interval(1000)
      .take(9)
      .map((x) => {
        return 50 - x;
      });     

      var bonusSubscription = src.subscribe((x) => {
        console.log('bonuspoint!');
        controller.set('bonus', x);
      });          
      
      controller.set('bonusSubscription', bonusSubscription); 
    }
  },
    
  actions: {
    invalidateModel() {
        this.refresh();
    }
  }
});