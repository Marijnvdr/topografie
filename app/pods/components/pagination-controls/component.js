import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    nextPage() {
      this.incrementProperty('currentPage');
      this.get('onPageChanged')();
    },
    
    prevPage() {
      if (this.get('currentPage') > 1) {
        this.decrementProperty('currentPage');  
        this.get('onPageChanged')();
      }            
    }
  }
});