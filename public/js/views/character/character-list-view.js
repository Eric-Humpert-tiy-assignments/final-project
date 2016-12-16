if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

  var CharactersList = Backbone.View.extend({

    // collection: context.CharacterCollection,

    initialize() {
      this.collection.fetch();
      this.listenTo(this.collection, 'add', this.modelAdded);
      console.log("collection check:", this.collection);
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
      var view = new context.CharacterView({ model: model});

      //view model relation tracker

      this.listenTo(view, 'all', eventName => {
        this.trigger('item:' + eventName, view, model);
      });

      view.render();
      return view;
    }

  });



  context.CharactersList = CharactersList;

})(window.comicSearch);
