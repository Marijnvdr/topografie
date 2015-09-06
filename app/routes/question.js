import Ember from 'ember';
// import ENV from 'topografie/config/environment';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('questioncountry', params.id);
  	//var url = ENV.apiHost + '/' + ENV.apiNamespace + '/questioncountries';
    //return Ember.$.getJSON(url);
  }
});