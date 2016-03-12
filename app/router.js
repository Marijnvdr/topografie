import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('gamedef', { path: '/' });
	this.route('capital', { path: '/capital' });
	this.route('question', { path: '/question' });
  this.route('countries', { path: '/countries' });
});

export default Router;
