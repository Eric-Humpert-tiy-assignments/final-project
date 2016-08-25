if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var CharacterModel = Backbone.Model.extend({

      defaults: {
        name: "",
        characterImage: ""
      }

  });
  context.CharacterModel = CharacterModel;

})(window.comicSearch);
