import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.$.getJSON('https://api.github.com/repos/vmware/photon/pulls').then(function(data) {
	    	return data.splice(0, 7);
	    });
	}
});
