;(function($) {
  app = Sammy('body', function() {
    this.get('/');
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