$("a[href='#top']").click(() => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
