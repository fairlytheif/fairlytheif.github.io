
function calculator(N){
    let form = document.querySelector('form');
    let inputName = document.getElementsByName('inputTable');
    form.inputName.value =
    form.inputName.value + N;
    pre_result();
}
function clean(){
    form.inputName.value = '';
    pre_result();
}
function equally(){
    let microCalc = form.inputName.value;
    if(microCalc){
        form.inputName.value =
    eval(form.inputName.value)
    }
    else{
        form.inputName.value = ''
    }
    pre_result();
}
function back(){
   let microCalc = form.inputName.value;
    form.inputName.value =
    microCalc.substring(0, microCalc.length-1);
    pre_result();
}
function pre_result(){
    let result = document.querySelector('.pre_result');
    let microCalc = form.inputName.value;
    if (microCalc) {
        result.innerText = `=${eval(microCalc)}`;
    } else {
        result.innerText = '=';
    }
}
function brackets(){
    form.inputName.value =
    '('+form.inputName.value+')';
}
    

