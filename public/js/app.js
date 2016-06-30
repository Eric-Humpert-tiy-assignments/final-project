if (window.Routing === undefined) {
    window.Routing = {};
}

(function(context) {

    var $viewContainer = $("#view-container");

    var mainView = new context.MainView( { el: $viewContainer });

    var gameRoutes = Backbone.Router.extend({

        routes: {
            'main-view': 'main',
            'hero-view': 'hero',
            'battle-view': 'battle',
            'leaderboard-view': 'leaderboard'

        },

        main: function() {
            $viewContainer.empty().append(mainView.render().el);
        },

        hero: function() {
            $viewContainer.empty().append(heroView.render().el);
        },

        leaderboard: function() {
            $viewContainer.empty().append(leaderboardView.render().el);
        }
    });

    var routes = context.gameRoutes = new gameRoutes();
    Backbone.history.start();

})(window.Routing);
