RemoteLocalStorage.js
=====================

This library alows you to do cross domain local storage.

It uses [easyXDM] to communicate between domains and [Store.js] to handle the local storage on the remote domain.
All the basic interactions are implemented except `store.forEach()` but you can get around that with `store.getAll()`.

How to use
-----------

On the **consumer** side add these to your html header:
````javascript
<script type="text/javascript" src="/js/easyXDM-2.4.19.3/easyXDM.min.js"></script>
<script type="text/javascript">
    easyXDM.DomHelper.requiresJSON("/js/easyXDM-2.4.19.3/json2.js");
</script>
<script type="text/javascript" src="/js/XDStore.js"></script>
````
The json is used to support old browsers.
In javascript you can use the same commands from [Store.js]. Only they now have callbacks.
You only have to change the `remote path` in [XDStore.js] to point to your provider page.

The **provider** side looks like this:

````javascript
<!doctype html>
<html>
    <head>
        <script type="text/javascript" src="/js/easyXDM-2.4.19.3/easyXDM.min.js"></script>
        <script type="text/javascript">
            easyXDM.DomHelper.requiresJSON("/js/easyXDM-2.4.19.3/json2.js");
        </script>
        <script type="text/javascript" src="/js/store.js-1.3.16/store+json2.min.js"></script>
        <script type="text/javascript" src="/js/XDStoreProvider.js"></script>
    </head>
    <body>
        Magic iframe :O
	</body>
</html>
````

In the [html] map you can see examples of the consumer and provider page.

That's it.


[easyXDM]:https://github.com/oyvindkinsey/easyXDM
[Store.js]:https://github.com/marcuswestin/store.js
[XDStore.js]:https://raw.githubusercontent.com/AdriVanHoudt/RemoteLocalStorage.js/master/js/XDStore.js
[html]:https://github.com/AdriVanHoudt/RemoteLocalStorage.js/tree/master/html
