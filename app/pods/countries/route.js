import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.queryRecord('country', {
      searchTerm: '',
      offset: 67,
      limit: 10
    });      
  }
});