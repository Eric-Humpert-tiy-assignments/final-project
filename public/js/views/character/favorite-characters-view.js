if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var FavoriteCharacters = Backbone.View.extend({

    events: {
      "click .search-return": "goToSearch",
    },

    initialize: function() {
      console.log("Collection check:", this.collection);
    },
    render: function() {

    },

    goToSearch: function() {
      console.log("You clicked search return");
      context.routes.navigate("search", { trigger: true })
    },

    show: function() {
      this.$el.show();
    },
    hide: function() {
      this.$el.hide();
    }

  });

  context.FavoriteCharacters = FavoriteCharacters;
})(window.comicSearch);
