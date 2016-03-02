import Ember from 'ember';

const { Rx } = window;

export default Ember.Route.extend({
  model: function() {
    let gamedefController = this.controllerFor('gamedef');
    let doStartGame = gamedefController.get('doStartGame');    
    let controller = this.controllerFor('question');
    let level = controller.get('level');
    if (doStartGame) {
      level = 0;
    }
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
      
      let s = controller.get('bonusObservable').subscribe((x) => {
        controller.set('bonus', x);
      });
      controller.set('bonusSubscription', s);
    }                
  },
    
  actions: {
    invalidateModel() {
        this.refresh();
    }
  }
});