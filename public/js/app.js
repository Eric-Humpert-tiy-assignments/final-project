if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var characterModel = new context.CharacterModel();
  var favoriteCharacters = new context.FavoriteCharacters({ el: $(".favorites-view")});
  var characterSearch = new context.CharacterSearch({ el: $(".search-view")});
  var comicModel = new context.ComicModel();
  var characterCollection = new context.CharacterCollection(null, { model: characterModel});
  var characterView = new context.CharacterView({ el: 'favorites-list', model: characterModel});
  var charactersList = new context.CharactersList({ el: 'favorites-list', collection: characterCollection})
  var appRouter = Backbone.Router.extend({

    routes: {
      "search": "searchReturn",
      "favorites": "goToFaves",
      "*home": "defaultPath"
    },

    searchReturn: function() {
      characterSearch.show();
      favoriteCharacters.hide();
    },

    goToFaves: function() {
      favoriteCharacters.show();
      characterSearch.hide();
    },

    defaultPath: function() {
      favoriteCharacters.hide();
    }

  });

  var routes = new appRouter();
  context.routes = routes;
  Backbone.history.start();

})(window.comicSearch);
