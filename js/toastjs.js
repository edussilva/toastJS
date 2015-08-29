function toast(msg, success){
    success = typeof success !== 'undefined' ? success : false;
    if(success){
        var t = $('#toast_success');
    }
    else{
        var t = $('#toast_warning');
    }
    
    t.text(msg);
    t.fadeIn(400).delay(3000).fadeOut(400);
}
