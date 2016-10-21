if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharacterView = Backbone.View.extend({

    initialize: function() {
      this.model.fetch();
      var self = this.model;
      self.on({
        "change": function() {
          self.render();
        }
      });
    },

    render: function() {
      this.model.forEach(this.model, this.templateFunc);
    },

    templateFunc: function() {
      console.log("the template");
      var template = $("#character-template");
      var displayMagics = _.template(template.html());
      var templateHTML = displayMagics({ characterImage: this.model.get('characterImage'), Name: this.model.get('name')});
      this.$el.html(templateHTML);
    }

    // characterImage Name
  });
  context.CharacterView = CharacterView;
})(window.comicSearch);
