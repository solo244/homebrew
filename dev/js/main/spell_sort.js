(function ($) {

  /*
   * Vars
   */
  var $body = $("html, body"),
      $sorting = $body.find(".sorting"),
      $sort_c1 = $sorting.find(".c1"),
      $sort_c2 = $sorting.find(".c2"),
      $sort_c3 = $sorting.find(".c3"),
      $sort_c4 = $sorting.find(".c4"),
      $sort_c5 = $sorting.find(".c5"),
      $sort_c6 = $sorting.find(".c6");

  $sorting.find("input").on("click", reSort);

  /*
   *
   */
  function reSort(e){
    var $spells = $body.find(".spells");

    var selected_c1 = [],
        selected_c2 = [],
        selected_c3 = [],
        selected_c4 = [],
        selected_c5 = [],
        selected_c6 = [];

    $sort_c1.find("input").each(function() {
      var $this = $(this),
          $text = $this.closest("li").text().trim();

      if($this.is(":checked")) {
        if($text === "Cantrip") {
          $text = "0";
        } else {
          $text = $text.replace("Level ", "");
        }
        selected_c1.push($text);
      }
    });

    $sort_c2.find("input").each(function() {
      var $this = $(this),
          $text = $this.closest("li").text().trim();

      if($this.is(":checked")) {
        selected_c2.push($text);
      }
    });

    $sort_c3.find("input").each(function() {
      var $this = $(this),
          $text = $this.closest("li").text().trim();

      if($this.is(":checked")) {
        if($text === "No") {
          $text = "-";
        }
        selected_c3.push($text);
      }
    });

    $sort_c4.find("input").each(function() {
      var $this = $(this),
          $text = $this.closest("li").text().trim();

      if($this.is(":checked")) {
        selected_c4.push($text);
      }
    });

    $sort_c5.find("input").each(function() {
      var $this = $(this),
          $text = $this.closest("li").text().trim();

      if($this.is(":checked")) {
        selected_c5.push($text);
      }
    });

    $sort_c6.find("input").each(function() {
      var $this = $(this),
          $text = $this.closest("li").text().trim();

      if($this.is(":checked")) {
        if($text === "No") {
          $text = "-";
        }
        selected_c6.push($text);
      }
    });

    if(selected_c1.length === 0) {
      selected_c1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    }
    if(selected_c2.length === 0) {
      selected_c2 = ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"];
    }
    if(selected_c3.length === 0) {
      selected_c3 = ["Yes", "-"];
    }
    if(selected_c4.length === 0) {
      selected_c4 = ["1 Action", "1 Bonus", "1 Minute", "10 Minutes", "1 Hour", "8 Hours", "Special"];
    }
    if(selected_c5.length === 0) {
      selected_c5 = ["V", "S", "M", "V, S", "V, M", "S, M", "V, S, M", "-"];
    }
    if(selected_c6.length === 0) {
      selected_c6 = ["Yes", "-"];
    }

    console.log('Comp: ', selected_c5);

    // Show/hide spells
    $spells.find(".spell").each(function() {
      var $this = $(this),
          $level = "" + $this.find(".c2").text(),
          $school = "" + $this.find(".c3").text(),
          $ritual = "" + $this.find(".c4").text(),
          $time = "" + $this.find(".c5").text(),
          $components = "" + $this.find(".c6").text(),
          $concentration = "" + $this.find(".c7").text();

      $this.addClass("hide-spell");

      var spellsMatch1 = selected_c1.indexOf($level),
          spellsMatch2 = selected_c2.indexOf($school),
          spellsMatch3 = selected_c3.indexOf($ritual),
          spellsMatch4 = selected_c4.indexOf($time),
          spellsMatch5 = selected_c5.indexOf($components),
          spellsMatch6 = selected_c6.indexOf($concentration);

      console.log(spellsMatch5);

      if(spellsMatch1 >= 0 && spellsMatch2 >= 0 && spellsMatch3 >= 0 && spellsMatch4 >= 0 && spellsMatch5 >= 0 && spellsMatch6 >= 0) {
        $this.removeClass("hide-spell");
        console.log('show this');
      }
    });

    // Animate to top
    var timer = setInterval(function(){ delayAnimation(); }, 100);

    function delayAnimation() {
      $('html, body').animate({
          scrollTop: $sorting.offset().top
      }, 800);
      clearInterval(timer);
    }
  }

})(jQuery);
