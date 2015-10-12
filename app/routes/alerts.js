import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
	model(){
		var token = login();
		var tokenData = {
			'Accept': 'application/json',
  			'Content-Type': 'application/json',
  			'Authorization': 'vRealizeOpsToken ' + token
		};
		var alerts =  getAlerts(tokenData).alerts;
		console.log(alerts);
		return alerts;
	}
	
});

const SUITE_API_ROOT = "https://10.20.133.157/suite-api";
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
// const username = "admin";
// const password = "Admin@123";

function login(){
	var token;
	Ember.$.ajax({
		url: "https://10.20.133.157/suite-api/api/auth/token/acquire",
		type: 'POST',
		async: false,
		dataType: 'json',
		headers: {
			'Accept': 'application/json',
		    'Content-Type': 'application/json'

		},
		data: JSON.stringify({
			// "authSource": "VMWARE.COM",
			username: "admin",
			password: "Admin@123"

		}),
		success: function(data){
		 	//success function
		 	token = data.token;
		}
	});
	return token;
};

function getAlerts(tokenData){
	var model;
	Ember.$.ajax({
		url: "https://10.20.133.157/suite-api/api/alerts",
		type: 'GET',
		async: false,
		dataType: 'json',
		headers: tokenData,
		success: function(data){
		 	//success function
		 	model = data;
		}
	});
	return model;
};
