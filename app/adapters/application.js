import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:57116',
  namespace: 'api'
});