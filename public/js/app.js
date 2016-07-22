if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {



  var dataModel = new context.DataModel();

  var mainView = new context.MainView({ el: $("#input-container")});
  var dataUrlBuilder = new context.DataGrabber({ el: $("#input-container")});

})(window.comicSearch);
