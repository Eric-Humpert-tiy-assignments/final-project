if (window.comicSearch === undefined) {
    window.comicSearch = {};
}

(function(context) {

    var CharactersList = Backbone.View.extend({

        // collection: context.CharacterCollection,

        initialize() {
            this.listenTo(this.collection, 'add', this.modelAdded);
        },

        modelAdded(model) {
            console.log("added a model!");
            var view = this.renderModel(model);
            this.$el.append(view.$el);
        },

        render() {
            // console.log("Character List View Render!");
            // this.$el.empty();
            var html = this.collection.map(model => {
                var view = this.renderModel(model);
                // view.render();
                return view.$el;
            })
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
