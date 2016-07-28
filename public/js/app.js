if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var comicModel = new context.ComicModel();
  var mainView = new context.MainView({ el: $("#input-container")});
  var dataUrlBuilder = new context.DataGrabber({ el: $("#input-container")});
  var comicCollection = new context.ComicCollection({ el: $("#results-container")});

})(window.comicSearch);
