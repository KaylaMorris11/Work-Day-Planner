var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do YYYY"));


var type = $("#number9");
var typeinput = localStorage.getItem("typeinput");
type.textContent = typeinput;

function getlocalstorage() {
    var data = localStorage.getItem("workdayscheduler") || "[]"
    var parsedData = JSON.parse(data);
    return parsedData;

}

function setlocalstorage(array) {
    var stringifiedArray = JSON.stringify(array);
    localStorage.setItem("workdayscheduler", stringifiedArray);
}

function renderTextArea() {
    var existingDataArray = getlocalstorage();
    if (existingDataArray.length > 0) {
        for (var i = 0; i < existingDataArray.length; i++) {
            var id = existingDataArray[i].id
            var textValue = existingDataArray[i].textValue
            var element = $(`#${id}`)
            element.val(textValue)
        }
    }
};

function initializeLocalStorage() {
    var existingDataArray = getlocalstorage();
    if(existingDataArray.length === 0){
        var array = [
            {
                id:"number9",
                textValue:""
            },{
                id:"number10",
                textValue:""
            },{
                id:"number11",
                textValue:""
            },{
                id:"number12",
                textValue:""
            },{
                id:"number1",
                textValue:""
            },{
                id:"number2",
                textValue:""
            },{
                id:"number3",
                textValue:""
            },{
                id:"number4",
                textValue:""
            },{
                id:"number5",
                textValue:""
            },

        ]
            setlocalstorage(array)

    }
}

$(".saveBtn").click(function () {
    var textValue = $(this).prev().val();
    var id = $(this).prev()[0].id;
    var existingDataArray = getlocalstorage();
    // var object = {
    //     id: id,
    //     textValue: textValue,
    // }
    // existingDataArray.push(object);
    for (let i = 0; i < existingDataArray.length; i++) {
        const element = existingDataArray[i];
        if(element.id === id){
            element.textValue = textValue;
        }
    }

    setlocalstorage(existingDataArray);

});

initializeLocalStorage();
renderTextArea();