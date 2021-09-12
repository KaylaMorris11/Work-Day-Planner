var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do YYYY"));

var type = $("#number9");
var typeinput = localStorage.getItem("typeinput");
type.textContent = typeinput;

$(".saveBtn").click(function() {
    type.textContent = typeinput;
    localStorage.setItem("typeinput", typeinput);
    console.log()
});

// JSON.parse(localStorage.getItem("inputText"));