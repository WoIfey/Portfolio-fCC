window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "-70px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}
