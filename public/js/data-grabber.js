if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var DataGrabber = Backbone.View.extend({
        tagName: "ul",

        //Event pair declaration
        events: {
            "keyup input": "grabHeroData",
        },

        initialize: function() {
          _.bindAll(this, 'grabHeroData', 'render', 'templateFunc');
        },

        render: function() {
          var $displayArea = this.$("#results-container");

          return this;
        },

        //Grab Hero Data function
        grabHeroData: function(evt) {
            if (evt.keyCode === 13) {
                var charName = $("#query-box").val();
                var charPic;
                //console.log("Got the character name: ", heroName);
                //console.log("checking what the this keyword is: ", this);
                //Variable to make the input able to be used with the ajax request.
                var codeFriendlyinput = encodeURIComponent(charName);

                //ajax request variable
                var result = $.ajax({
                    url: "http://gateway.marvel.com:80/v1/public/characters?name=" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
                });

                //when the data request finishes a console log to display the resulting comic data
                result.done(function(coolStuff) {
                  console.log("Got the data:", coolStuff);
                  console.log("character image: " + coolStuff.data.results[0].thumbnail.path + "/portrait_fantastic.jpg");
                  charPic = ( coolStuff.data.results[0].thumbnail.path + "/portrait_fantastic.jpg");
                  //console.log("checking what the this keyword is try 2: ", this);
                  for (var j = 0; j < coolStuff.data.results.length; j++) {

                  //set up the collection to use the data I need to populate the search results list
                  comicCollection = coolStuff.data.results[j].comics.items;
                    //console.log("checking what the this keyword is try 3", this);
                    //console.log("query result:", coolStuffArray);

                    //console.log("list item bits:", coolStuffArray);
                    for (var item in comicCollection) {
                      console.log("title:", comicCollection[item].name, "ResourceURI:", comicCollection[item].resourceURI);

                    }
                  }
                })

            }
        },

        templateFunc: function(item) {
          var comicTemplate = $('#result-template').html();
          var templateBuilder = _.template(comicTemplate);
          var html = ({name: item.name, resourceURI: item.resourceURI});
          $("#results-container").html(html);
        }
    });

    context.DataGrabber = DataGrabber;

})(window.comicSearch);
