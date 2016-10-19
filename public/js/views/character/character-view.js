if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharacterView = Backbone.View.extend({
    template: _.template("#character-template"),

  });
  context.CharacterView = CharacterView;
})(window.comicSearch);
