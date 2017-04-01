$(document).ready(function(){



    function shuffle(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
  }
// WHEN THE BUTTON IS CLICKED

    $(function() {
        $("button").click(function() {
            var $all = $(".square").removeClass("selected");
                $(shuffle($all).slice(0,3)).addClass("selected");

        });
    });
});
