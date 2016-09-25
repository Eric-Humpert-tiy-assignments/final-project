if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharacterImage = Backbone.View.extend({
    model: context.CharacterModel,

    events: {
      'change': 'grabCharacterData'
    }
  });

  context.CharacterImage = CharacterImage;
})(window.comicSearch);
