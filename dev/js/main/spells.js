(function ($) {

  /*
   * Vars
   */
  var $body = $("html, body"),
      $spells = $body.find(".spells"),
      max = spell_data.length;

  setSpells();
  console.log(spell_data);

  /*
   *
   */
  function setSpells(e){
    for(var i = 0; i < max; i++) {
      console.log(spell_data[i].name);
      $spells.append('<div class="spell"><div class="c1">' + spell_data[i].name + '</div><div class="c2">' + spell_data[i].level + '</div><div class="c3">' + spell_data[i].school + '</div><div class="c4">' + spell_data[i].ritual + '</div><div class="c5">' + spell_data[i].casting_time + '</div><div class="c6">' + spell_data[i].components + '</div><div class="c7">' + spell_data[i].concentration + '</div><div class="description"></div></div>');
    }
  }

})(jQuery);
