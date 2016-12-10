if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var FavoriteCharacters = Backbone.View.extend({

    events: {
      "click .search-return": "goToSearch",
    },

    initialize() {
      this.listenTo(this.collection, 'add', this.addModel);
    },

    modelAdded(model) {
      var view = this.renderModel(model);
      this.$el.append(view.$el);
    },

    render() {
      var html = this.collection.map(model => {
        var view = this.renderModel(model);
        view.render();
        return view.$el;
      })

      this.$el.html(html);
      return this;
    },

    renderModel (model) {
      var view = new this.characterView({ model: model});

      //view model relation tracker
      this.children[model.cid] = view;

      this.listenTo(view, 'all', eventName => {
        this.trigger('item:' + eventName, view, model);
      });

      view.render();
      return view;
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
