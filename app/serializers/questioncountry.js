import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse: function(store, primaryModelClass, payload) {
    let relationshipData = [];
    for (let item of payload.choices) {
      let obj = {};
      obj.id = item.id;
      obj.type = 'country';
      relationshipData.push(obj);
    }
    
    let answerData = {};
    answerData.id = payload.answer.id;
    answerData.type = 'country';    

    let qc = {};
    qc.id = 1;
    qc.type = primaryModelClass.modelName;
    qc.relationships = {};
    qc.relationships.choices = {};
    qc.relationships.choices.data = relationshipData;
    qc.relationships.answer = {};
    qc.relationships.answer.data = answerData;

    let includedData = [];
    for (let item of payload.choices) {
    let obj = {};
    obj.id = item.id;
    obj.type = 'country';
    obj.attributes = item; 
    includedData.push(obj);  
    }
     
    return { "data": qc, "included": includedData };
  },
  
  keyForAttribute: function(attr) {
  	return attr.capitalize();
  }


});