if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {
  var CharacterCollection = Backbone.Collection.extend({
    model: context.CharacterModel,
    url: "/api/favorites",
    initialize: function() {
      this.fetch();
    }

  });
  context.CharacterCollection = CharacterCollection;

})(window.comicSearch);
