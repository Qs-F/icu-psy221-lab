// reference: https://codepen.io/vitoralberto/pen/yyRxMQ
var justHidden = false;
var j;

function hide() {
  $("html").css({
    cursor: "none",
  });
  justHidden = true;
  setTimeout(function () {
    justHidden = false;
  }, 500); // 0.5秒後に出す
}
$(document).mousemove(function () {
  if (!justHidden) {
    justHidden = false;
    // console.log('move');
    clearTimeout(j);
    $("html").css({
      cursor: "default",
    });
    j = setTimeout(hide, 2000); // 2秒後に隠す
  }
});
