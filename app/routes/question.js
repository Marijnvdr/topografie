import Ember from 'ember';

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
      controller.set('score.name', playerName);
    }
  },

  actions: {
    invalidateModel() {
        this.refresh();
    }
  }
});