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

    this.get('itenineraries', function() {
      $(".itenineraries").show();
    });

    this.get('pictures', function() {
      $(".pictures").show();
      $(".picture-tiles").html("");

      var pictures = [
        "3 toed Sloth", "Boat", "Bungalow"//, "Bungalow2", "Butterfly", "Butterflys", "Caterpillar", "Cock of the Rock", "Forest", "Forest2", "Grasshopper", "Guide", "Guide2", "Guide3", "Guide4", "Guide7", "Guide8", "Hoatzin", "Jaguar", "Jaguar2", "Macaw", "Macaw2", "Macaw3", "Macaw4", "Macaw5", "Macaw6", "Monkey", "Monkey2", "Monkey3", "Monkey4", "Monkey5", "Monkey6", "Parrots", "Plant", "Plant2", "Plant3", "River", "Taper", "Turantula"
      ];

      for(var i in pictures) {
        var $html = $(Handlebars.templates.picture({
          image: pictures[i]
        }));

        $(".picture-tiles").append($html);
      }

      var options = new LightboxOptions();
      var lightbox = new Lightbox(options);

      setTimeout(function() {
        $(".pictures").show();
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
