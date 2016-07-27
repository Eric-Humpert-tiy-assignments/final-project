if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var DataGrabber = Backbone.View.extend({
        tagName: "ul",

        //Event pair declaration
        events: {
            "keyup input": "grabHeroData",
        },

        //Grab Hero Data function
        grabHeroData: function(evt) {
            if (evt.keyCode === 13) {
                var heroName = $("#query-box").val();
                //console.log("Got the character name: ", heroName);
                //console.log("checking what the this keyword is: ", this);
                //Variable to make the input able to be used with the ajax request.
                var codeFriendlyinput = encodeURIComponent(heroName);

                //ajax request variable
                var result = $.ajax({
                    url: "http://gateway.marvel.com:80/v1/public/characters?name=" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
                });

                //when the data request finishes a console log to display the resulting comic data
                result.done(function(coolStuff) {
                  console.log("Got the data:", coolStuff);
                  //console.log("checking what the this keyword is try 2: ", this);
                  for (var j = 0; j < coolStuff.data.results.length; j++) {

                  comicCollection = coolStuff.data.results[j].comics.items;
                    //console.log("checking what the this keyword is try 3", this);
                    //console.log("query result:", coolStuffArray);

                    //console.log("list item bits:", coolStuffArray);
                    for (var item in comicCollection) {
                      console.log("The list items:", comicCollection[item]);
                      console.log(this.models);
                      //this.models.buildComicList(comicCollection[item].item);
                      //this.buildComicList("requestURI", coolStuffArray[item].requestURI);
                    }
                  }
                })

            }
        }
    });

    context.DataGrabber = DataGrabber;

})(window.comicSearch);
