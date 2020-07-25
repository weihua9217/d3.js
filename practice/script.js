//function showMsg(msg,msg2){
//    
//alert(msg2+msg);
//    
//}

var showMsg = function(msg1,msg2){
    var msgAll = msg2+msg1;
    return msgAll;
}

var random = function(N,M){
    
    console.log(N,M)
    return Math.floor(Math.random()*(M-N+1)+N);
    
}