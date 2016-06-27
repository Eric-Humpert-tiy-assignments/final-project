if (window.GameRouting === undefined) {
    window.GameRouting = {};
}

(function(context) {


    var gameRoutes = Backbone.Router.extend({

        routes: {
            'main-page': 'main',
            'hero-page': 'hero',

        },

        main: function() {
            $viewContainer.empty().append(mainView.render().el);
        },

        hero: function() {
            $viewContainer.empty().append(heroView.render().el);
        }
    })

})(window.GameRouting);
