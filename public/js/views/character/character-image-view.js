if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharacterImage = Backbone.View.extend({
    model: context.CharacterModel,

    events: {
      'change': 'grabCharacterData'
    },

    grabCharacterData: function(){
      this.model.on('change', function(){
          var html = ('<h2> Here are the comics ' + this.model.get(name) + ' appears in.</h2>' + '</br>' +'<img href=' + this.model.get(characterImage) + ' >');
          this.$("#image-container").html(html);
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
