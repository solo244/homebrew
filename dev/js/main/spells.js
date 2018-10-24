(function ($) {

  /*
   * Vars
   */
  var $body = $("html, body"),
      $spells = $body.find(".spells"),
      max = spell_data.length;

  setSpells();

  /*
   *
   */
  function setSpells(e){
    for(var i = 0; i < max; i++) {
      $spells.append('<div class="spell"><div class="c1">' + spell_data[i].name + '</div><div class="c2">' + spell_data[i].level + '</div><div class="c3">' + spell_data[i].school + '</div><div class="c4">' + spell_data[i].ritual + '</div><div class="c5">' + spell_data[i].casting_time + '</div><div class="c6">' + spell_data[i].components + '</div><div class="c7">' + spell_data[i].concentration + '</div><div class="classes"><strong>Class:</strong> ' + spell_data[i].class + '</div><div class="description">' + spell_data[i].description + '</div></div>');
    }

    $(".spell").on("click", openClose);

    var total = $(".spell:not(.hide-spell)").length;
    $(".sorting .total").text(total);
  }

  function openClose(e) {
    var $this = $(this);

    $this.toggleClass("active");
  }

})(jQuery);
