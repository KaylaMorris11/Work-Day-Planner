var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do YYYY"));

$(".saveBtn").click(function(){
    var input = $("textarea").value;
    localStorage.setItem("inputText", input);
})

JSON.parse(localStorage.getItem("inputText"));