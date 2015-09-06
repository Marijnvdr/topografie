import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('gamedef', { path: '/' });
	this.route('capital', { path: '/capital' });
	this.route('question', { path: '/question' });
});

export default Router;
