if (window.Routing === undefined) { window.Routing = {}; }

(function(context) {

  var MainView = Backbone.View.extend({

    initialize: function() {
      this.$el.html("Is the main view displaying?");
      return this;
    }
  });

  context.MainView = MainView;

})(window.Routing);
