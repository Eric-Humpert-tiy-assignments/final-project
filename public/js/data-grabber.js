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
                result.done(function(coolStuff) {
                  console.log("Got the data:", coolStuff);
                  for (var j = 0; j < coolStuff.data.results.length; j++) {

                  var coolStuffArray = coolStuff.data.results[j].comics.items;
                    console.log("query result:", coolStuffArray);

                    //console.log("list item bits:", coolStuffArray);
                    for (var i = 0; i < coolStuffArray.length; i++) {
                      console.log("The list stuff:", coolStuffArray[i]);
                      //this.model.buildComicList(coolStuffArray[i]);
                    }
                  }
                })

            }
        }
    });

    context.DataGrabber = DataGrabber;

})(window.comicSearch);
