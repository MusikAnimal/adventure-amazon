;(function($) {
  app = Sammy('body', function() {
    this.get('/', function() {
      var images = [
        "Boat", "Macaw5", "Monkey2", "Jaguar", "3 toed Sloth"
      ];

      for(i in images) {
        var index = parseInt(i);
        var $html = $(Handlebars.templates.slide({
          id: index,
          image: images[i],
          prevId: index-1 < 1 ? images.length-1 : index-1,
          nextId: index+1 > images.length-1 ? 1 : index+1,
          checkedText: i==0 ? "checked" : ""
        }));
        $(".carousel").append($html);
      }
    });

    this.get('itenineraries');
    this.get('pictures');
    this.get('contact');
    this.get('terms');

    this.addListeners = function() {}
  });

  $(function() {
    app.run();
    app.addListeners();
  });
})(jQuery);