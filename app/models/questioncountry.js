import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.belongsTo('country')
  //choices: DS.hasMany('country')
});