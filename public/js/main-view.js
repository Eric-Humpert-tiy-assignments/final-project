if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {


    var MainView = Backbone.View.extend({
      el: $("#view-container"),

      templateFunc: _.template($("#result-template").html()),


      intialize: function() {
        console.log(this.$el);
      },

      render: function() {
        templateFunc()
      }
  });
  context.MainView = MainView;

})(window.comicSearch);
