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
    $spells.find(".spell").each(function() {
      var $this = $(this),
          $level = $this.find(".c2").text(),
          $school = $this.find(".c3").text(),
          $ritual = $this.find(".c4").text(),
          $time = $this.find(".c5").text(),
          $components = $this.find(".c6").text(),
          $concentration = $this.find(".c7").text(),
          selected_c1 = [],
          selected_c2 = [],
          selected_c3 = [],
          selected_c4 = [],
          selected_c5 = [],
          selected_c6 = [];

      $sort_c1.find("input").each(function() {
        var $this = $(this),
            $text = $this.closest("li").text();

        console.log($this);
        console.log($text);

        if($this.checked) {
          selected_c1.push($text);
          console.log(selected_c1);
        }
      });


      /*var categoriesPresent = ['word', 'word', 'specialword', 'word'];
      var foundPresent = categoriesPresent.includes('specialword');

      console.log(foundPresent, foundNotPresent); // true false*/


    });
  }

})(jQuery);
