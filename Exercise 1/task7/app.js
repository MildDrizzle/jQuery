$("#btn").click(() => {
  $("div:animated").toggleClass("colored");
});

const divAnimation = () => {
  $("#div1,#div2").toggle(2000, divAnimation);
};

divAnimation();
