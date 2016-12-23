if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var FavoriteCharacters = Backbone.View.extend({

    initialize: function() {
      this.charactersList = new context.CharactersList({ el: '.favorites-list', collection: this.collection});
      // this.collection.fetch({remove: false});
      // this.listenTo(this.charactersList, 'add', this.render());
    },

    events: {
      "click .search-return": "goToSearch",
    },

    goToSearch: function() {
      console.log("You clicked search return");
      context.routes.navigate("search", { trigger: true });
    },

    render: function() {
      console.log("rendering!");
      this.charactersList.render();
    },

    show: function() {
      console.log("fetching the latest collection!");
      this.collection.fetch();
      this.$el.show();
    },
    hide: function() {
      this.$el.hide();
    }

  });

  context.FavoriteCharacters = FavoriteCharacters;
})(window.comicSearch);
