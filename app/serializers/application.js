import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    let data = {};
    data.id = id;
    data.type = primaryModelClass.modelName;
    data.attributes = payload; 
    let newPayload = {};
    newPayload.data = data;
  	return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  keyForAttribute: function(attr) {
  	return attr.capitalize();
  }


});