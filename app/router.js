import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('users');
  this.route('alerts');
  this.route('sodas');
  this.route('photon');
  this.route('trails');
  this.route('trials');
  this.route('subscribers');
});

export default Router;
