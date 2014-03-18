Sample-RequireJS-Front
======================

How To
--

Launch your favourite shell, go to project folder :

```
> npm install
> bower install
> grunt debug
> grunt run
```

Require
-------

This basic sample show how use requirejs, go 'src/scripts' folder 

Grunt Tasks
-----------

Samples of Grunt tasks (connect, copy, clean)

Grunt command tasks :
* grunt run -> launch a local http server
* grunt prod -> clean 'vendors' folder, copy minified files from 'bower_components' to 'vendors'
* grunt debug -> clean 'vendors' folder, copy files from 'bower_components' to 'vendors'


Web folder
===

index.html
---

Add reference in your index.html to requirejs lib file and your 'main.js'

```
<script type="text/javascript" src="./vendors/require.js" data-main="./scripts/main.js"></script>
```

main.js
---

Alias to lib that you want to use with require

```
require.config({
	paths: {
		'jquery': '../vendors/jquery',
		'toastr': '../vendors/toastr'
	}
});
```

Call [the differents lib]

```
require(['jquery', 'toastr'], function($, toastr) {
	$(document).ready(function() {
		
		toastr.info('Are you the 6 fingered man?');
	
	});
});
```
