if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharacterView = Backbone.View.extend({

    tagName: "li",

    template: _.template($('#character-template').html()),

    events: {
      "click .list-button": "deleteFavorite"
    },

    deleteFavorite: function(evt) {
        console.log("click test", this.model.get("characterId"));
        this.model.destroy({wait: true});
    },

    render() {
      // console.log("this check:", this, this.model.get("characterId"));
      var data = this.serializeData();
      var renderedHtml = this.template(data);
      this.$el.html(renderedHtml);
      return this;
    },

    serializeData() {
      var data;
      // console.log("model check", this.model);
      if (this.model) {
        data = this.model.toJSON();
      }

      return data;
    }

  });
  context.CharacterView = CharacterView;
})(window.comicSearch);
