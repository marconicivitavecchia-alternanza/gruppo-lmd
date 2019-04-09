var accedi = function(){

    console.log("hai cliccato su accedi");
    var username = $("#username>input").val();
    console.log("username"+username);
    var password = $("#password>input").val();
    console.log("password"+password);
    var auth = btoa(username+password);
    console.log("auth"+auth);

    $.get("http://10.3.0.205:3000/login?auth="+auth,accediRisposta);
}

var accediRisposta = function(data) {
   console.log(data);
   alert(data);

}

var init = function(){

    console.log("ciao sono tuba");
    console.log($("title") .text("Marconi alternanza prova"));
    $("#username>input").attr("placeholder","wbigger");

    $("#submit>button").on("click",accedi);
}
    var init = function(){
        console.log("ciao sono bonzo");
        console.log($("title") .text("Marconi alternanza"));
        $("#username>input").attr("placeholder","wbigger");
        $("#submit>button").on("click",accedi);
    }


$(document).ready(init);