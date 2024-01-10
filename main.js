const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.to("#center h1", {
  color: "red",
  duration: 3,
});
