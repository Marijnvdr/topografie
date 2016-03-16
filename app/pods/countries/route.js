import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let controller = this.controllerFor('countries');
    let offset = (controller.get('currentPage') -1) * 10;

    return this.store.queryRecord('country', {
      searchTerm: '',
      offset: offset,
      limit: 10
    });      
  },
  
  actions: {
    invalidateModel() {
      this.refresh();
    }    
  }
});