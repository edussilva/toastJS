# toastJS
Simple toast style with JQuery v. 0.1


## Install

####Requirements
* jquery


#### CSS
```html
<link rel="stylesheet" type="text/css" href="toastjs/css/toastjs.css" />
```
#### JS
```html
<script type="text/javascript" src="toastjs/js/toastjs.js" charset="utf-8"></script>
```

#### HTML
```html
<div class="toast_warning" id="toast_warning" style="display:none"></div>
<div class="toast_success" id="toast_success" style="display:none"></div>
```

##### Documentation

toast warning:
```javascript
$(document).ready(function(){
    toast("Warning Message");  // or toast("Warning", false);
});
```

toast success:
```javascript
$(document).ready(function(){
    toast("Success Message", true);
});
```
