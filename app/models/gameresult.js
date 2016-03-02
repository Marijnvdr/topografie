import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  questionCount: DS.attr(),
  mistakeCount: DS.attr(),
  score: DS.attr()
});