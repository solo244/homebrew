(function ($) {

  var $body = $("html, body"),
    $sorting = $body.find(".sorting"),
    $filterCheckboxes = $sorting.find("input[type=checkbox]");

  setSpellCount();

  $filterCheckboxes.on('change', function () {
    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function () {
      if (!selectedFilters.hasOwnProperty(this.name)) {
        selectedFilters[this.name] = [];
      }
      selectedFilters[this.name].push(this.value);
    });

    var $filteredResults = $(".spells .spell");

    $.each(selectedFilters, function (name, filterValues) {
      $filteredResults = $filteredResults.filter(function () {
        var matched = false,
          currentFilterValues = $(this).data("category").split(" ");

        $.each(currentFilterValues, function (_, currentFilterValue) {
          if ($.inArray(currentFilterValue, filterValues) != -1) {
            matched = true;
            return false;
          }
        });

        return matched;
      });
    });

    $(".spells .spell").addClass("hide-spell").filter($filteredResults).removeClass("hide-spell");
    setSpellCount();
  });

  function setSpellCount() {
    var total = $(".spell:not(.hide-spell)").length;
    $(".sorting .total").text(total);
  }

})(jQuery);
