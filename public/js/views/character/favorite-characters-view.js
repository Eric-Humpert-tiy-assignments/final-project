if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var FavoriteCharacters = Backbone.View.extend({

    initialize: function() {
      this.charactersList = new context.CharactersList({ el: '.favorites-list', collection: this.collection});
    },

    events: {
      "click .search-return": "goToSearch"
    },

    goToSearch: function() {
      // console.log("You clicked search return");
      context.routes.navigate("search", { trigger: true });
    },

    render: function() {
      console.log("Favorites View render");
      this.charactersList.render();
    },

    show: function() {
      $(".favorites-list").empty();
      this.render();
      this.$el.show();
    },
    hide: function() {
      this.$el.hide();
    }

  });

  context.FavoriteCharacters = FavoriteCharacters;
})(window.comicSearch);
