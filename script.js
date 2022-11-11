window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var nav = document.getElementById("navbar");

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 750) {
    nav.style.top = "-80px";
    nav.style.transition = "0.2s";
    nav.style.opacity = "30%";
  } else {
    nav.style.top = "0px";
    nav.style.transition = "0.2s";
    nav.style.opacity = "100%";
  }
}
