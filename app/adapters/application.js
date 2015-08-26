import DS from 'ember-data';
import ENV from 'topografie/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,
  namespace: ENV.apiNamespace
});