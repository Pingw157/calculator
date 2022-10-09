var a = document.getElementById('input');
var d = document.getElementById("dark");
var q = document.getElementsByClassName('but');
var temp;
var cn = 0;

function addToInput(x) {
  checkLength();
  if (x == '=') {
    if (a.innerHTML.includes('×')) {
      temp = a.innerHTML.replace("×", "*");
      a.innerHTML = eval(temp);
    }
    else if (a.innerHTML.includes('÷')) {
      temp = a.innerHTML.replace("÷", "/");
      a.innerHTML = eval(temp);
    }
    else { a.innerHTML = eval(a.innerHTML); }
  }
  else if (a.innerHTML.length > 18) {
    //do Nothing
  }
  else {
    a.innerHTML += x;
  }
}

function removeInput(i) {
  checkLength();
  if (i == 1) { a.innerHTML = ''; }
  else { a.innerHTML = a.innerHTML.slice(0, -1); }
}

function checkLength() {
  if (a.innerHTML.length > 8 && a.innerHTML.length <= 12) {
    a.style.fontSize = "50px";
  }
  else if (a.innerHTML.length > 12) {
    a.style.fontSize = "30px";
  }
  else { a.style.fontSize = "70px"; }
}

function colored() {
  var bod = document.getElementById("body");
  if (cn % 2 == 0) {
    bod.style.background = "#222222";
    d.innerHTML = d.innerHTML.replace("Dark", "Light");
    for (var n = 0; n < q.length; n++) {
      q[n].style.color = "#222222";
    }

  }
  else {
    bod.style.background = "#ffffff";
    d.innerHTML = d.innerHTML.replace("Light", "Dark");
    for (var w = 0; w < q.length; w++) {
      q[w].style.color = "#ffffff";
    }
  }
  cn++;
}
