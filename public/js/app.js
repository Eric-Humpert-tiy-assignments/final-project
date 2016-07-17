if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var mainView = new context.MainView({ el: $("#view-container")});
  var dataUrlBuilder = new context.DataGrabber({ el: $("#view-container")});

})(window.comicSearch);
