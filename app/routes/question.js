import Ember from 'ember';
import ENV from 'topografie/config/environment';

export default Ember.Route.extend({
  model: function() {
    // return this.store.findRecord('questioncountry', params.id);
  	let url = ENV.apiHost + '/' + ENV.apiNamespace + '/questioncountries';
    return Ember.$.getJSON(url);
  },

  actions: {
    invalidateModel() {
        this.refresh();
    }
  }
});