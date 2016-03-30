import JsonApiSerializer from 'ember-cli-mirage/serializers/json-api-serializer';

export default JsonApiSerializer.extend({
  serialize(response, request) {
    let json = JsonApiSerializer.prototype.serialize.apply(this, arguments);
    let res = [];
    for (let item of json.data) {
      item.name = item.attributes.name; 
      res.push(item);
    }
    return res;
  } 
});
