$(document).ready(function () {
    $('#dt-vertical-scroll').dataTable({
      "paging": false,
      "fnInitComplete": function () {
        var myCustomScrollbar = document.querySelector('#dt-vertical-scroll_wrapper .dataTables_scrollBody');
        var ps = new PerfectScrollbar(myCustomScrollbar);
      },
      "scrollY": 450,
    });
  });

let locationCheckBox = document.getElementById("anotherLocation");
let inputLocation = document.getElementById("inputAnotherLocation");
let locationComboBox = document.getElementById("location");
inputLocation.disabled = true;
locationCheckBox.addEventListener('click',()=>{
  if(locationCheckBox.checked == true){
    inputLocation.disabled = false;
    locationComboBox.disabled = true;
  }
  else{
    locationComboBox.disabled = false;
    inputLocation.disabled = true;
  }
})
let transCheckBox = document.getElementById("anotherTrans");
let inputAnotherTrans = document.getElementById("inputAnotherTrans");
let transComboBox = document.getElementById("trans");
inputAnotherTrans.disabled = true;
transCheckBox.addEventListener('click',()=>{
  if(transCheckBox.checked == true){
    inputAnotherTrans.disabled = false;
    transComboBox.disabled = true;
  }
  else{
    transComboBox.disabled = false;
    inputAnotherTrans.disabled = true;
  }
})
let checkBoxDay = document.getElementById("day");
function load_SoNgay(){
  let option
  for(let i = 1 ; i <= 30 ; i++){
    option = document.createElement("option");
    option.text = i;
    checkBoxDay.add(option);
  }
  option = document.createElement("option");
  option.text = '30+';
  checkBoxDay.add(option);
}
load_SoNgay();