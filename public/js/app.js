if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var characterModel = new context.CharacterModel();
  var characterImage = new context.CharacterImage({el: $("#input-container")});
  var mainView = new context.MainView({ el: $("#input-container")});
  var characterUrlBuilder = new context.CharacterSearch({ el: $("#input-container")});
  var comicModel = new context.ComicModel();
  var comicCollection = new context.ComicCollection({ el: $("#results-container")});

})(window.comicSearch);
