# toastJS
Simple toast style with JQuery


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
##### Documentation

toast warning:
```javascript
$(document).ready(function(){
    toast("Warning Message");  // or toast("Warning", false);
});
``

toast success:
```javascript
$(document).ready(function(){
    toast("Success Message", true);
});
```
