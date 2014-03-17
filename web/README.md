index.html
==

Add reference in your index.html to requirejs lib file and your 'main.js'

```
<script type="text/javascript" src="./vendors/require.js" data-main="./scripts/main.js"></script>
```

main.js
==

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
