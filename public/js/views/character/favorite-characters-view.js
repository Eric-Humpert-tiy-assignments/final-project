if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var FavoriteCharacters = Backbone.View.extend({



    initialize: function() {
      console.log("collection check:", this.collection);
      var charactersList = new context.CharactersList({ el: 'favorites-list', collection: this.collection})
    },

    events: {
      "click .search-return": "goToSearch",
    },

    goToSearch: function() {
      console.log("You clicked search return");
      context.routes.navigate("search", { trigger: true });
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
