if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var characterModel = new context.CharacterModel();
  var favoriteCharacters = new context.FavoriteCharacters({ el: $(".favorites-view")});
  var characterSearch = new context.CharacterSearch({ el: $(".search-view")});
  var comicModel = new context.ComicModel();
  var comicCollection = new context.ComicCollection({ el: $("#results-container")});
  console.log("the context", context);
  var characterCollection = new context.CharacterCollection();

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
