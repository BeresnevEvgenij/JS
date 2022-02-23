let out1 = document.querySelector('#out-1');
document.querySelector('#btm-1').onclick = function() {
  out1.value = "1";
}

console.log("Евгений");
console.log(02);
console.log('Добро '+'плжаловать '+'на курс!');

let a = 7;
let b = 9;
console.log(a * b);

let out2 = document.querySelector('#out-2');
  document.querySelector('#btm-2').onclick = function () {
    if (out2.value == 4) {
      out2.value = true;
    }
    else {
      out2.value = false;
    }
  }
let classP = document.querySelector('#classP');
  document.querySelector('#classP').onclick = function () {
    console.log("4444");
}

for (var i = 0; i < 8; i++) {
  console.log(i+"_");
}
