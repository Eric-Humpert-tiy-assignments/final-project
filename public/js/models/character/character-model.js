if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var CharacterModel = Backbone.Model.extend({
      url: "api/favorites",

      defaults: {
        characterId: 0,
        characterImage: "",
        description: "This character has no description text in the API data result.",
        name: ""
      }

  });
  context.CharacterModel = CharacterModel;

})(window.comicSearch);
