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
      $sort_c6 = $sorting.find(".c6"),
      $spells = $body.find(".spells");

  $sorting.find("input").on("click", reSort);

  /*
   *
   */
  function reSort(e){
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
      selected_c5 = ["V", "S", "M"];
    }
    if(selected_c6.length === 0) {
      selected_c6 = ["Yes", "-"];
    }

    // Show/hide spells
    $spells.find(".spell").each(function() {
      var $this = $(this),
          $level = $this.find(".c2").text(),
          $school = $this.find(".c3").text(),
          $ritual = $this.find(".c4").text(),
          $time = $this.find(".c5").text(),
          $components = $this.find(".c6").text(),
          $concentration = $this.find(".c7").text();

      var spellsMatch1 = selected_c1.includes($level),
          spellsMatch2 = selected_c2.includes($school),
          spellsMatch3 = selected_c3.includes($ritual),
          spellsMatch4 = selected_c4.includes($time),
          spellsMatch5 = selected_c5.includes($components),
          spellsMatch6 = selected_c6.includes($concentration);

      //console.log(spellsMatch1);

      if(spellsMatch1 && spellsMatch2 && spellsMatch3 && spellsMatch4 && spellsMatch5 && spellsMatch6) {
        console.log("count");
        $this.removeClass("hide-spell");
      } else {
        $this.addClass("hide-spell");
        $this.removeClass("active");
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
