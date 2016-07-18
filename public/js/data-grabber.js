if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var DataGrabber = Backbone.View.extend({

    events: {
      "keyup #query-box": "heroQuery",
    },

    heroQuery: function(evt) {

      var query = this;

      if (evt.keycode === 13) {
        var input = query.$("#query-box").val();

        console.log(input);

      }
    /*
        console.log(input);
        //codeFriendlyinput = encodeURIComponent(input);

        $.ajax({
            url: "http://gateway.marvel.com:80/v1/public/characters?" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
        })

        console.log("http://gateway.marvel.com:80/v1/public/characters?" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339");
    */
    }

    });
    context.DataGrabber = DataGrabber;
})(window.comicSearch);
