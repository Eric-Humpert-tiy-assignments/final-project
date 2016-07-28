if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var ComicModel = Backbone.Model.extend({

      defaults: {
        name: "",
        requestURI: ""
      }

  });
  context.ComicModel = ComicModel;

})(window.comicSearch);
