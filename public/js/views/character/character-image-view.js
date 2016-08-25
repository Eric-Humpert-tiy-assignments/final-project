if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharacterImage = Backbone.View.extend({
    model: context.CharacterModel,

    events: {
      'change': 'grabCharacterData'
    },

    grabCharacterData: function(){
      this.model.on('change', function(){
          var html = ('<img href=' + this.model.get(characterImage) + ' >' + '<span> ' + this.model.get(name) + ' </span>');
          this.$el.html(html);
      });
      this.render();
    },

    render: function() {
      console.log("Can you see this view for the image holder?");
      this.grabCharacterData();
    }
  });

  context.CharacterImage = CharacterImage;
})(window.comicSearch);
