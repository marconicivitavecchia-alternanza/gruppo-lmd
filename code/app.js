var accedi = function(){
 console.log("hai cliccato su accedi");
 var username=$("#username>input").val();
 console.log("username"+username);
 var password =$("#password>input").val();
 console.log("password"+password);
}
    var init = function(){
        console.log("ciao sono bonzo");
        console.log($("title") .text("Marconi alternanza"));
        $("#username>input").attr("placeholder","wbigger");
        $("#submit>button").on("click",accedi);
    }


$(document).ready(init);