if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var CharacterModel = Backbone.Model.extend({

      defaults: {
        characterImage: "",
        description: "This character has no description text in the API data result.",
        id: 0,
        name: ""
      }

  });
  context.CharacterModel = CharacterModel;

})(window.comicSearch);
