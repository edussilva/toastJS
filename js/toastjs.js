var warning_div = document.createElement('div');
warning_div.className = 'toast-plugin warning';
warning_div.id = 'toast-warning';
warning_div.style.display = 'none';

var success_div = document.createElement('div');
success_div.className = 'toast-plugin success';
success_div.id = 'toast-success';
success_div.style.display = 'none';

var tag_p1 = document.createElement('p');
success_div.appendChild(tag_p1);
var tag_p2 = document.createElement('p');
warning_div.appendChild(tag_p2);

var body_tag = document.getElementsByTagName('body')[0];
body_tag.appendChild(warning_div);
body_tag.appendChild(success_div);

function toast(msg, success){
    success = typeof success !== 'undefined' ? success : false;
    if(success){
        var t = $('#toast-success');
    }
    else{
        var t = $('#toast-warning');
    }
    var p = t.children();
    p.text(msg);
    t.fadeIn(400).delay(3000).fadeOut(400);
}
