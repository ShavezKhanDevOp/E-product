var input_number = document.getElementsByClassName("Quantity");
var minValue = input_number[0].min;
var minValue = input_number[0].max;
var value = parseInt(input_number[0].value);

var Add_Item = document.getElementsByClassName("Add-Item");
var Remove_Item = document.getElementsByClassName("Remove-Item");


Add_Item[0].addEventListener('click', function () {
    if (value >= 1) {
        Remove_Item[0].classList.add("btn-color");
    }

    value = value + 1
    input_number[0].value = value;
});

Remove_Item[0].addEventListener('click', function () {
    if (value !== 1) {
        value = value - 1
        input_number[0].value = value;
    }
    if (value <= 1) {
        Remove_Item[0].classList.remove("btn-color");
    }


});
