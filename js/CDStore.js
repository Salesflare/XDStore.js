var store = (function() {
	var store = {};
	var rpc = new easyXDM.Rpc({
		remote: "http://127.0.0.1:60785/html/provider.html" // the path to the provider
		}, 
		{
			remote: {
				set: function(key, value, callback){},
				get: function(key, callback){}
			}
		});


	store.set = function(key, value) {
		rpc.set(key, value, function(response){
			//TODO handle succes set callback
			alert(response.result);
		}, function(errorObj){
			console.error(errorObj);
		});
	};
	
	store.get = function(key) {
		rpc.get(key, function(response){
			//TODO handle succes get callback
			alert(response.result);	
		}, function(errorObj){
			console.error(errorObj);	
		});
	};
	
	return store;
}());