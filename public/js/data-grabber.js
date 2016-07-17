if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var DataGrabber = Backbone.View.extend({

    events: {
      "change input#query-box": "nameSearch",
    },

    initialize: function() {

    },

    nameSearch: function(evt) {

    var input = $("#query-box").val();
    var codeFriendlyinput;


        console.log(input);
        //codeFriendlyinput = encodeURIComponent(input);

        $.ajax({
            url: "http://gateway.marvel.com:80/v1/public/characters?" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
        })

        console.log("http://gateway.marvel.com:80/v1/public/characters?" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339");
    }

    });
    context.DataGrabber = DataGrabber;
})(window.comicSearch);
