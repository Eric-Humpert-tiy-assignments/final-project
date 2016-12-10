if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharacterView = Backbone.View.extend({

    tagName: "li",

    template: _.template($('#character-template').html()),

    render() {
      var data = this.serializeData();
      var renderedHtml = this.template(data);
      this.$el.html(renderedHtml);
      return this;
    },

    serializeData() {
      var data;

      if (this.model) {
        data = this.model.toJSON();
      }

      return data;
    }

  });
  context.CharacterView = CharacterView;
})(window.comicSearch);
