import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  name_nl: DS.attr(),
  region: DS.attr(),
  subRegion: DS.attr(),
  code: DS.attr(),
  showSubRegion: DS.attr(),
  difficultyLevel: DS.attr()
});