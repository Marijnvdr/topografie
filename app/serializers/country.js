import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  
  normalizePayload: function(payload) {
 	return { "country": payload };
  },

  keyForAttribute: function(attr) {
  	return attr.capitalize();
  }
});