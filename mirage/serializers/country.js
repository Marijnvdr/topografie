// mirage/serializers/blog-post.js
import Serializer from './application';

export default Serializer.extend({
  serialize(object, request) {
    debugger;
    // This is how to call super, as Mirage borrows [Backbone's implementation of extend](http://backbonejs.org/#Model-extend)
    let json = Serializer.prototype.serialize.apply(this, arguments);
    // Add metadata, sort parts of the response, etc.

    return json;
  },
  
  normalize(payload) {
    debugger;
    return payload;
  },
  
  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    debugger;
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }  
});