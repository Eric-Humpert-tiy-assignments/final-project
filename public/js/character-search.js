if (window.comicSearch === undefined) {
    window.comicSearch = {};
}

(function(context) {

    var CharacterSearch = Backbone.View.extend({
        tagName: "ul",

        //Event pair declaration
        events: {
            "keyup input": "grabHeroData",
        },

        initialize: function() {

            _.bindAll(this, 'grabHeroData', 'render', 'templateFunc');
            //This is something you made progress with today!
            this.model = new context.CharacterModel();
            this.listenTo(this.model, "change", this.render);
            console.log("model check:",this.model);
        },

        render: function() {
            var self = this;
            var template = _.template($("#image-template").html(), {charPic: this.model.get("charPic")});

            return self;
        },

        //Grab Hero Data function
        grabHeroData: function(evt) {
          //bind the this keyword to a self variable declaration.
          var self = this;
            if (evt.keyCode === 13) {
                var charName = $("#query-box").val();
                var charPic;
                var codeFriendlyinput = encodeURIComponent(charName);
                //console.log("Got the character name: ", heroName);
                //console.log("checking what the this keyword is: ", this);
                //Variable to make the input able to be used with the ajax request.

                //ajax request variable
                var result = $.ajax({
                    url: "http://gateway.marvel.com:80/v1/public/characters?name=" + codeFriendlyinput + "&apikey=1103dc5941f198d7daedd7998113e339",
                });

                //when the data request finishes a console log to display the resulting comic data
                result.done(function(coolStuff) {

                    //console.log("Got the data:", coolStuff);
                    //console.log check for building the character thumbnail image link
                    console.log("character image: " + coolStuff.data.results[0].thumbnail.path + "/portrait_fantastic.jpg");
                    console.log("this check:", self);
                    console.log("model check:", self.model);
                    //set the attribute of the model to the link that is the character image from the API
                    self.model.set({
                        name: (coolStuff.data.results[0].name),
                        characterImage: (coolStuff.data.results[0].thumbnail.path + "/portrait_fantastic.jpg")
                    });
                    $('#image-container').append('<img src=' + (coolStuff.data.results[0].thumbnail.path + "/portrait_fantastic.jpg") + '/>')


                    //set up the collection to use the data I need to populate the search results list
                    comicCollection = coolStuff.data.results[0].comics.items;
                    //console.log("query result:", coolStuffArray);

                    //console.log("list item bits:", coolStuffArray);
                    for (var item in comicCollection) {
                        $('#query-results').append('<a href=' + comicCollection[item].resourceURI + '><li>' + comicCollection[item].name + '</li></a>');
                        console.log("title:", comicCollection[item].name, "ResourceURI:", comicCollection[item].resourceURI);

                    }
                    return comicCollection;
                })

            }
        },
        //Refactored code here to be more practical to what this view does
        templateFunc: function(picture) {
            var comicTemplate = $('#image-template').html();
            var templateBuilder = _.template(comicTemplate);
            var html = templateBuilder({
                characterPic: picture
            });
            $("#image-container").html(html);
        }
    });

    context.CharacterSearch = CharacterSearch;

})(window.comicSearch);
