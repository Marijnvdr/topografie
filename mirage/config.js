export default function() {
  this.namespace = 'http://localhost:57116/api';
  
  this.get('/countries', (schema, request) => {
    debugger;
    return schema.country.all();
  });  
}