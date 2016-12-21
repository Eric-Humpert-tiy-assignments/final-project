if (window.comicSearch === undefined) {
    window.comicSearch = {};
}

(function(context) {

    var CharactersList = Backbone.View.extend({

        // collection: context.CharacterCollection,

        initialize() {
            // this.collection.fetch();
            this.listenTo(this.collection, 'add', this.modelAdded);
            // console.log("collection check:", this.collection);
        },

        modelAdded(model) {
            console.log("added a model!");
            var view = this.renderModel(model);
            this.$el.append(view.$el);
            console.log("$el check", this.$el);
            console.log("view check", view);
        },

        render() {
          console.log("render count", this.collection.length);
            var html = this.collection.map(model => {
                var view = this.renderModel(model);
                view.render();
                return view.$el;
            })
            console.log("HTML stuff:", html);
            this.$el.html(html);
            return this;
        },

        renderModel(model) {
            var view = new context.CharacterView({
                model: model
            });
            view.render();
            return view;
        }

    });



    context.CharactersList = CharactersList;

})(window.comicSearch);
