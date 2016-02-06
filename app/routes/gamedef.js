import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //return this.store.query('country', { difficultyLevel: 3 });
    
    return this.store.findAll('country').then((records) => {
      return records.filterBy('difficultyLevel', 1);
    });
    
/*
    return this.store.findAll('country').then((records) => {
      return records.filter(function(item) {
        return item.get('difficultyLevel') === 3;
      });    
    });
 */   
  }
});