if (this.comicSearch === undefined) this.comicSearch = {};

(function(context) {

    var input = $("#input-box");
    var codeFriendlyinput;

    function start() {

        $.ajax({
            url: "http://gateway.marvel.com:80/v1/public/characters?" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
        })

        console.log("http://gateway.marvel.com:80/v1/public/characters?" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339");
    }
    context.start = start;

})(window.comicSearch);
