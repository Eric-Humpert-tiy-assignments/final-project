if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharacterImage = Backbone.View.extend({
    initialize: function() {
      this.render();
    },

    render: function() {
      console.log("Can you see this view for the image holder?");
    }
  });

  context.CharacterImage = CharacterImage;
})(window.comicSearch);
