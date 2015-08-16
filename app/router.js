import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('capital', { path: '/capital' });
	this.route('country', { path: '/country' });
});

export default Router;
