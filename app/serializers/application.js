import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI: true,
  
  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
  	payload.id = id;
  	let newPayload = {};
  	newPayload[primaryModelClass.modelName] = payload;
  	return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  keyForAttribute: function(attr) {
  	return attr.capitalize();
  }


});