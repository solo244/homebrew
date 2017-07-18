(function ($) {

  /*
   * Vars
   */
  var $body = $("html, body"),
      $search_field = $body.find(""),
      $search_empty = $body.find("");

  $search_field.on("keyup", getResults);
  $search_empty.on("click", emptySearch);

  /*
   *
   */
  function getResults(e){
    var $this = $(this).val().toLowerCase();

    if($this === ""){
      $all_tutorials_blocks.removeClass("show_result");
    }
    else{
      $all_tutorials_blocks.each(function(){
        var content = $(this).find("h3").text().toLowerCase();
        $(this).removeClass("show_result");
        if(content.indexOf($this) >= 0){
          $(this).addClass("show_result");
        }
      });
    }
  }

  function emptySearch(){
    $tut_search.val("");
    $all_tutorials_blocks.removeClass("show_result");
  }

})(jQuery);
