import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.peekAll('gameresult').sortBy('score').reverse().slice(0, 10);   
  }
});