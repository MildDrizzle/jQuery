$("#btn").click(() => {
  const count = $("#iddiv").find("*").length;
  $("body").prepend("" + count + " element(s) found");
});
