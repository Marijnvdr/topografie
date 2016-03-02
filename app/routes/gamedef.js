import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {    
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
  },
  
  model: function() {
    return this.store.peekAll('gameresult').sortBy('score').reverse();   
  }
});