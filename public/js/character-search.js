if (window.comicSearch === undefined) {
    window.comicSearch = {};
}

(function(context) {

    var CharacterSearch = Backbone.View.extend({


        tagName: "ul",

        //Event pair declaration
        events: {
            "keyup input": "grabCharacterData",
            "click .favorites-button": "saveFavoriteCharacter",
            "click .favs-button": "goToFavorites"
        },

        initialize: function() {

            //This is something you made progress with today!
            this.model = new context.CharacterModel();
            this.listenTo(this.model, "change", this.render);
            console.log("model check:",this.model);
        },

        render: function() {
        },

        //Grab Hero Data function
        grabCharacterData: function(evt) {
          //bind the this keyword to a self variable declaration.
          var self = this;
            if (evt.keyCode === 13) {
                var charName = $("#query-box").val();
                var charPic;
                //Variable to make the input able to be used with the ajax request.
                var codeFriendlyinput = encodeURIComponent(charName);
                //ajax request variable
                var result = $.ajax({
                    url: "http://gateway.marvel.com:80/v1/public/characters?name=" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
                });
                $("#query-box").val('');
                //when the data request finishes a console log to display the resulting comic data
                result.done(function(coolStuff) {
                    self.model = new context.CharacterModel();
                    //console.log check for building the character thumbnail image link
                    // console.log("character image: " + coolStuff.data.results[0].thumbnail.path + "/portrait_fantastic.jpg");
                    // console.log("this check:", self);
                    // console.log("model check:", self.model);
                    //set the attribute of the model to the link that is the character image from the API
                    var characterDescription = coolStuff.data.results[0].description;
                    if ( characterDescription === "") {
                      characterDescription = self.model.get("description");
                    } else {
                      self.model.set({description: characterDescription});
                    };
                    console.log("characterDescription:", characterDescription);

                    self.model.set({
                        characterId: (coolStuff.data.results[0].id),
                        name: (coolStuff.data.results[0].name),
                        characterImage: (coolStuff.data.results[0].thumbnail.path + "/portrait_fantastic.jpg"),
                        description: characterDescription
                    });
                    $('.image-container').html('<img src="' + self.model.get("characterImage") + '">');
                    $('.details-container').html(self.model.get("description"));
                    $('.favorites-button').removeClass('hidden');
                    $('.title-bar').empty();
                    $('.title-bar').append(" Here are some of the comics " + coolStuff.data.results[0].name + " appears in.");
                    console.log("the cool stuff", coolStuff);
                    //set up the collection to use the data I need to populate the search results list
                    comicCollection = coolStuff.data.results[0].comics.items;
                    $('#query-results').empty();
                    for (var item in comicCollection) {
                        // var link = comicCollection[item].resourceURI + "?apikey=1103dc5941f198d7daedd7998113e339";
                        $('#query-results').append('<li>' + comicCollection[item].name + '</li>');
                        // console.log("title:", comicCollection[item].name, "ResourceURI:", comicCollection[item].resourceURI);

                    }
                    return comicCollection;
                })

            }
        },

        goToFavorites: function(evt) {
          console.log("click favorites");
          context.routes.navigate("favorites", { trigger: true});
        },
        saveFavoriteCharacter: function(evt) {
          this.model.save();
        },

        show: function() {
          this.$el.show();
        },
        hide: function() {
          this.$el.hide();
        }
    });

    context.CharacterSearch = CharacterSearch;

})(window.comicSearch);
