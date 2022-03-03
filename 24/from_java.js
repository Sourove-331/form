//from validation

var sub = document.getElementById("sb");
sub.onclick = function validate(){
    var n = document.getElementById("fn");
    var m = document.getElementById("pw");

    if(n.value==='' || m.value===''){
        alart('Field can\'t be empty')
    }
    else{

    }

    if(m.value.length<3 ||m.value.length>10){
        alart('Password is not valid')
    }

    var str=n.value.slice(0,1)
    if(str==="_" || str==="$"){
        alart('Enter valid Name:')
    }

}