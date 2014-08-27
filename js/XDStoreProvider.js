if(store.enabled){
	var rpc = new easyXDM.Rpc({},
	{
		local: {
			set: function(key, value){
				store.set(key, value);
				return true;
			},
			get: function(key){
				if (store.get(key) == null) {
					return false;
				}
				return store.get(key);
			}, 
			remove: function(key){
				store.remove(key);
				return true;
			},
			getAll: function(){
				if(store.getAll() == null){
					return false;   
				}
				return store.getAll();
			}
		}
	});
}