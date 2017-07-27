(function ($) {

  /*
   * Vars
   */
  var $body = $("html, body"),
      $search = $body.find(".search-block"),
      $search_field = $search.find(".search-field input"),
      $search_empty = $search.find(".search-field .clear"),
      $result_blocks = $body.find(".search-result .seRe");

  $search_field.on("keyup", getResults);
  $search_empty.on("click", emptySearch);

  /*
   *
   */
  function getResults(e){
    var $this = $(this).val().toLowerCase().replace(" ", "");

    if($this === ""){
      $result_blocks.addClass("show-result");
    }
    else{
      $result_blocks.each(function(){
        var content = $(this).find(".searchable").text().toLowerCase().replace(" ", "");
        $(this).removeClass("show-result");
        if(content.indexOf($this) >= 0){
          $(this).addClass("show-result");
        }
      });
    }
  }

  function emptySearch(){
    $search_field.val("");
    $result_blocks.addClass("show-result");
  }

})(jQuery);
