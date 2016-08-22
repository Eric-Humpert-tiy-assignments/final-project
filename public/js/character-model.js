if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var CharacterModel = Backbone.Model.extend({

      defaults: {
        name: "",
        charPic: ""
      }

  });
  context.CharacterModel = CharacterModel;

})(window.comicSearch);
