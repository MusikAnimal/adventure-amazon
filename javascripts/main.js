;(function($) {
  app = Sammy('body', function() {
    this.get('/', function() {
      $(".home").show();
      var images = [
        "Boat", "Macaw5", "Monkey2", "Jaguar", "3 toed Sloth"
      ];

      for(var i in images) {
        var index = parseInt(i);
        var $html = $(Handlebars.templates.slide({
          id: index,
          image: images[i],
          prevId: index-1 < 1 ? images.length-1 : index-1,
          nextId: index+1 > images.length-1 ? 1 : index+1,
          checkedText: index===0 ? "checked" : ""
        }));
        $(".carousel").append($html);
      }

      setTimeout(function() {
        $(".home").addClass("visible");
      }, 100);
    });

    this.get('itenineraries');

    this.get('pictures', function() {
      $(".pictures").show();

      var pictures = [
        "Boat", "Macaw5", "Monkey2", "Jaguar", "3 toed Sloth"
      ];

      for(var i in pictures) {
        var $html = $(Handlebars.templates.picture({
          image: pictures[i]
        }));

        $(".picture-tiles").append($html);
      }

      setTimeout(function() {
        $(".pictures").addClass("visible");
      }, 100);
    });

    this.get('contact');
    this.get('terms');

    this.before({}, function(context) {
      $(".page").hide().removeClass("visible");
    });

    this.addListeners = function() {};
  });

  $(function() {
    app.run();
    app.addListeners();
  });
})(jQuery);
