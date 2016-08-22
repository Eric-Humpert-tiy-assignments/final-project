if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {


    var MainView = Backbone.View.extend({
      el: $("#results-container"),
      model: context.ComicModel,

      templateFunc: _.template($("#image-template").html()),
  });
  context.MainView = MainView;

})(window.comicSearch);
