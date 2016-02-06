import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    /*
  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    let data = {};
    data.id = id;
    data.type = primaryModelClass.modelName;
    data.attributes = payload; 
    let newPayload = {};
    newPayload.data = data;
  	return this._super(store, primaryModelClass, newPayload, id, requestType);
  },
    */
    
  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    if (id !== null) {      
      return { "data": { "type": primaryModelClass.modelName, "id": id, "attributes": payload } };
    } else {
      let data = [];
      for (let item of payload) {
        let obj = {};
        obj.id = item.id;
        obj.type = primaryModelClass.modelName;
        obj.attributes = item; 
        data.push(obj);  
      };
      return { "data": data };   
    }  
  },
  
  keyForAttribute: function(attr) {
  	return attr.capitalize();
  }


});