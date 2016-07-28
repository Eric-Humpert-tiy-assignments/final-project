if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {
  var ComicCollection = Backbone.Collection.extend({
    model: context.ComicModel,
  });
  context.ComicCollection = ComicCollection;

})(window.comicSearch);
