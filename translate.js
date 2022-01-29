var btn=document.querySelector("#button1");
var inputtxt=document.querySelector("#inputtext");
var outputtxt=document.querySelector("#outputtext");

var serverurl="https://api.funtranslations.com/translate/minion.json";
function gettranslation(text){
    return serverurl + "?" + "text=" + text;
}
function translate(){
    var txt=inputtxt.value;

    fetch(gettranslation(txt))
    .then(response=> response.json())
    .then(json=>{
        var translatedtxt=json.contents.translated;
        outputtxt.innerText=translatedtxt;
    })

}
btn.addEventListener("click",translate);