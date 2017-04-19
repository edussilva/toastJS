# toastJS
Simple toast style with jQuery v. 1.0


## Install

#### Requirements
* jquery


#### CSS
```html
<link rel="stylesheet" type="text/css" href="src/css/toastjs.css" />
```
#### JS
```html
<script src="src/js/toastjs.js"></script>
```


##### Documentation

Types:
```javascript
$(function(){
  // toast("Message", "toast type", seconds)

  // Do not run code at the same time
  toast("Test message", "debug", 4);
  toast("Test message", "info", 2);
  toast("Test message", "success", 5);
  toast("Test message", "warning", 1);
  toast("Test message", "error", 3);
});
```
