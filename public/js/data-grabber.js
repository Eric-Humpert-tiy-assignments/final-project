if (window.comicSearch === undefined) {
    window.comicSearch = {};
}

(function(context) {

    var DataGrabber = Backbone.View.extend({
        //Event pair declaration
        events: {
            "keyup input": "grabHeroData",
        },

        //Grab Hero Data function
        grabHeroData: function(evt) {
            console.log("Grab hero name fires");
            if (evt.keyCode === 13) {
                var heroName = this.$("#query-box").val();
                console.log(heroName);

                //Variable to make the input able to be used with the ajax request.
                var codeFriendlyinput = encodeURIComponent(heroName);

                //ajax request variable
                var result = $.ajax({
                    url: "http://gateway.marvel.com:80/v1/public/characters?name=" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
                });

                //when the data request finishes a console log to display the resulting comic data
                result.done(function(comics) {
                    console.log("query result:", comics);
                })

            }
        }
    });

    context.DataGrabber = DataGrabber;

})(window.comicSearch);
