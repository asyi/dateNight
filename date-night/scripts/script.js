$(document).ready(function() {
  $("#btn").click(function() {

    var ids = [1, 2, 3, 4];
    $(".box").addClass("opacity");

    // do this a bunch of times over and over again
      var delay = 100;
      var timer = setInterval(play, delay);
      var winid;

    function play(counter) {
        winid = ids[Math.floor(Math.random() * ids.length)];
        console.log("decision made");
        $(".box").removeClass("boxChoosing");
        $(".box").removeClass("non-opacity");
        $("#" + winid).addClass("boxChoosing");
        $("#" + winid).addClass("non-opacity");
    }


    function finish() {
      alert("done");
    }


      setTimeout(function() {
      clearInterval( timer );
    //   $("#" + winid).addClass("boxWin");
        },
        Math.round(Math.random() * (3000 - 500)) + 500 // Generate random time between 500ms and 3s.
    );
    });
});
