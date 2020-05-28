var gmInput = document.getElementById("gramsvalue");
var lbsInput = document.getElementById("lbsvalue");
var kgInput = document.getElementById("kgvalue");
var ozInput = document.getElementById("ozvalue");

var li = document.querySelectorAll(".input");
for (var i = 0; i < li.length; i++) {
  console.log(li[i]);
  li[i].addEventListener("click", function (e) {
    gmInput.value = null;
    kgInput.value = null;
    lbsInput.value = null;
    ozInput.value = null;

    gmInput.setAttribute("placeholder", 0);
    kgInput.setAttribute("placeholder", 0);
    lbsInput.setAttribute("placeholder", 0);
    ozInput.setAttribute("placeholder", 0);
  });
}

gmInput.addEventListener("input", function (e) {
  var gm = e.target.value;
  kgInput.setAttribute("placeholder", gm / 1000);
  lbsInput.setAttribute("placeholder", gm * 0.00220462);
  ozInput.setAttribute("placeholder", gm * 0.035274);
});

lbsInput.addEventListener("input", function (e) {
  var lbs = e.target.value;
  gmInput.setAttribute("placeholder", lbs / 0.00220462);
  kgInput.setAttribute("placeholder", lbs * 0.453592);
  ozInput.setAttribute("placeholder", lbs * 16);
});

kgInput.addEventListener("input", function (e) {
  var kg = e.target.value;
  gmInput.setAttribute("placeholder", kg * 1000);
  lbsInput.setAttribute("placeholder", kg * 2.20462);
  ozInput.setAttribute("placeholder", kg * 35.274);
});

ozInput.addEventListener("input", function (e) {
  var oz = e.target.value;
  gmInput.setAttribute("placeholder", oz * 28.3495);
  lbsInput.setAttribute("placeholder", oz * 0.0625);
  kgInput.setAttribute("placeholder", oz * 0.0283495);
});
