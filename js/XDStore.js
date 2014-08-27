var store = (function() {
	var store = {};
	var rpc = new easyXDM.Rpc({
		remote: "http://127.0.0.1:60785/html/provider.html" // the path to the provider
		}, 
		{
			remote: {
				set: function(key, value, callback){},
				get: function(key, callback){},
				remove: function(key, callback){}
			}
		});


	store.set = function(key, value, callback) {
		rpc.set(key, value, function(response){
			console.log('set' + response);
			if(callback){
				callback(response);	
			}	
		}, function(errorObj){
			console.error(errorObj);
		});
	};
	
	store.get = function(key, callback) {
		rpc.get(key, function(response){
			console.log('get ' + response);	
			console.log(response);
			if(callback){
				callback(response);	
			}
		}, function(errorObj){
			console.error(errorObj);	
		});
	};
	
	store.remove = function(key, callback) {
		rpc.remove(key, function(response){
			console.log('removed ' + response);	
			if(callback){
				callback(response);	
			}			
		}, function(errorObj){
			console.error(errorObj);	
		});	
	};
	
	return store;
}());