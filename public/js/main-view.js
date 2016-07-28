if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {


    var MainView = Backbone.View.extend({
      el: $("#view-container"),
  });
  context.MainView = MainView;

})(window.comicSearch);
