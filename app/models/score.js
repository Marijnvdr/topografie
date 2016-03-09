import StorageObject from 'ember-local-storage/session/object';

export default StorageObject.extend({
  storageKey: 'topografie-score',
  initialContent: {
    name: '',
    total: 0,
    count: 1,
    excludeList: ''
  }
});
