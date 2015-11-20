$(document).ready(function () {
  var bars = $("[data-percentage]");
  for(var i = 0, l = bars.length; i < l; i++){
    var bar = bars[i];
    //Calculate the 
    var barWidth = bar.offsetWidth / (bar.parentNode.offsetWidth / 100);
    var unit = barWidth / 100;

    var barNewWidth = bar.getAttribute("data-percentage");

    bar.style.width = barNewWidth * unit + "%";
  }
});