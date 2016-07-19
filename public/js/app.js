if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {


        var codeFriendlyinput = encodeURIComponent("Doctor Strange");

        var result = $.ajax({
            url: "http://gateway.marvel.com:80/v1/public/characters?name=" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
        });

        result.done(function(comics) {
          console.log("query result:", comics );
        })


  var dataModel = new context.DataModel();

  var mainView = new context.MainView({ el: $("#view-container")});
  var dataUrlBuilder = new context.DataGrabber({ el: $("#view-container")});

})(window.comicSearch);
