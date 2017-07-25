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

      console.log(selected_c1);

      if($this.is(":checked")) {
        if($text === "Cantrip") {
          $text = "0";
        } else {
          $text = $text.replace("Level ", "");
        }
        selected_c1.push($text);
      }
      if(selected_c1.length === 0) {
        selected_c1 = ["0", "1", "2", "3", "4", "5", "6"];
      }
    });

    $spells.find(".spell").each(function() {
      var $this = $(this),
          $level = $this.find(".c2").text(),
          $school = $this.find(".c3").text(),
          $ritual = $this.find(".c4").text(),
          $time = $this.find(".c5").text(),
          $components = $this.find(".c6").text(),
          $concentration = $this.find(".c7").text();

      var spellsMatch = selected_c1.includes($level);
      if(spellsMatch) {
        $this.show();
      } else {
        $this.hide();
      }
    });
  }

})(jQuery);
