import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.set('currentPage', 1);
  },

  actions: {
    pageChanged() {
      this.send('invalidateModel');  
    }      
  }  
  
});