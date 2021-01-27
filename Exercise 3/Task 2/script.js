let current = 1;
let state = false;
$(document).ready(function () {
  $(".accord1 .content").slideUp();
  $(".accord2 .content").slideUp();
  $(".accord3 .content").slideUp();
  $(".card1").hide();
  $(".card2").hide();
  $(".card3").hide();
});

const slide1 = () => {
  $(".accord1 .content").slideToggle();
  if (current === 1) {
    if (state) {
      $(`.accord${current} .title .ico`).css({ transform: "rotate(0deg)" });
      state = !state;
    } else {
      $(".accord1 .title .ico").css({ transform: "rotate(90deg)" });
      state = !state;
    }
  } else {
    $(`.accord${current} .title .ico`).css({ transform: "rotate(0deg)" });
    current = 1;
    $(".accord1 .title .ico").css({ transform: "rotate(90deg)" });
    // state = !state;
  }
  $(".accord2 .content").slideUp();
  $(".accord3 .content").slideUp();
  console.log(state);
};

const slide2 = () => {
  $(".accord2 .content").slideToggle();
  if (current === 2) {
    if (state) {
      $(`.accord${current} .title .ico`).css({ transform: "rotate(0deg)" });
      state = !state;
    } else {
      $(".accord2 .title .ico").css({ transform: "rotate(90deg)" });
      state = !state;
    }
  } else {
    $(`.accord${current} .title .ico`).css({ transform: "rotate(0deg)" });
    current = 2;
    $(".accord2 .title .ico").css({ transform: "rotate(90deg)" });
    // state = !state;
  }
  $(".accord1 .content").slideUp();
  $(".accord3 .content").slideUp();
  console.log(state);
};

const slide3 = () => {
  $(".accord3 .content").slideToggle();
  if (current === 3) {
    if (state) {
      $(`.accord${current} .title .ico`).css({ transform: "rotate(0deg)" });
      state = !state;
    } else {
      $(".accord3 .title .ico").css({ transform: "rotate(90deg)" });
      state = !state;
    }
  } else {
    $(`.accord${current} .title .ico`).css({ transform: "rotate(0deg)" });
    current = 3;
    $(".accord3 .title .ico").css({ transform: "rotate(90deg)" });
    // state = !state;
  }
  $(".accord1 .content").slideUp();
  $(".accord2 .content").slideUp();
  console.log(state);
};

const show1 = () => {
  $(".card1").fadeIn();
  $(".card2").hide();
  $(".card3").hide();
  slide1();
};
const show2 = () => {
  $(".card2").fadeIn();
  $(".card1").hide();
  $(".card3").hide();
  slide2();
};
const show3 = () => {
  $(".card3").fadeIn();
  $(".card2").hide();
  $(".card1").hide();
  slide3();
};
