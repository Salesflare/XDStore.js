function XDStore(url) {
	var store = {};
	var rpc = new easyXDM.Rpc({
		remote: url // the path to the provider
		}, 
		{
			remote: {
				set: function(key, value, callback){},
				get: function(key, callback){},
				remove: function(key, callback){},
				getAll: function(callback){}
			}
		});


	//	Returns true if succes, if error it returns the error object
	store.set = function(key, value, callback) {
		rpc.set(key, value, function(response){
			if(callback) callback(response);	
		}, function(errorObj){
			if(callback) callback(errorObj);
		});
	};
	
	/* 	Returns the data from the given key
	 * 	if the key is not found is will return false
	 * 	if there is an error it will return the error object
	 */
	store.get = function(key, callback) {
		rpc.get(key, function(response){
			if(callback) callback(response);
		}, function(errorObj){
			if(callback) callback(errorObj);
		});
	};
	
	// Returns true if succes
	store.remove = function(key, callback) {
		rpc.remove(key, function(response){
			if(callback) callback(response);			
		}, function(errorObj){
			if(callback) callback(errorObj);
		});	
	};
	
	store.getAll = function( callback) {
		rpc.getAll(function(response){
			if(callback) callback(response);			
		}, function(errorObj){
			if(callback) callback(errorObj);
		});	
	};
	
	return store;
}