if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var characterModel = new context.CharacterModel();
  var FavoriteCharacters = new context.FavoriteCharacters();
  var mainView = new context.MainView({ el: $("#input-container")});
  var characterUrlBuilder = new context.CharacterSearch({ el: $("#input-container")});
  var comicModel = new context.ComicModel();
  var comicCollection = new context.ComicCollection({ el: $("#results-container")});
  console.log("the context", context);
  var characterCollection = new context.CharacterCollection();

})(window.comicSearch);
