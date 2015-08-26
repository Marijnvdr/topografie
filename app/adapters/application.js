import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:57116',
  namespace: 'api'
});