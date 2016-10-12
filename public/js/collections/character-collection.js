if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {
  var CharacterCollection = Backbone.Collection.extend({
    model: context.CharacterModel,
    url: "/api/favorites",

  });
  context.CharacterCollection = CharacterCollection;

})(window.comicSearch);
