if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var ComicModel = Backbone.Model.extend({

      defaults: {
        name: "",
        resourceURI: "",
        comicCoverImage: "",
        description: ""
      }

  });
  context.ComicModel = ComicModel;

})(window.comicSearch);
