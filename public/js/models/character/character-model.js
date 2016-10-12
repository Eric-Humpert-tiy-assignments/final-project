if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var CharacterModel = Backbone.Model.extend({
      url: "api/favorites",

      defaults: {
        characterImage: "",
        description: "This character has no description text in the API data result.",
        characterId: 0,
        name: ""
      }

  });
  context.CharacterModel = CharacterModel;

})(window.comicSearch);
