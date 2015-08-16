import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  
  normalizePayload: function(payload) {
 	return { "capital": payload };
  },

  // Every model item is lowercase, but the payload is Capitalized coming from the API.
  // This method does the mapping from model (attr parameter) to Payload (return value)
  keyForAttribute: function(attr) {
  	// return attr.charAt(0).toUpperCase() + attr.substring(1);
  	return attr.capitalize();
  }

  /*
  // This is another way to get the model to map the payload, but I think keyForAttribute is a bit easier and more general.
  normalizeHash: {
    capital: function(hash) {
      hash.name = hash.Name;
      delete hash.Name;
      return hash;
    }
  }*/

});