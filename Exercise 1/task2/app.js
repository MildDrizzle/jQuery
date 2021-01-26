$("p").each(function () {
  let pdata = $(this);
  pdata.html(pdata.text().replace(/(^\w+)/, "<strong>$1</strong>"));
});
