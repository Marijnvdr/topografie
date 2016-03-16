import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function(params) {
    params.searchTerm = '';
    params.paramMapping = {
      perPage: "limit",
      page: "offset"
    };
    return this.findPaged('country', params);
    /*
    return this.store.queryRecord('country', {
      searchTerm: '',
      offset: 67,
      limit: 10
    });
    */      
  }
});