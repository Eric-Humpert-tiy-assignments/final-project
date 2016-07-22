if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {


    var DataModel = Backbone.Model.extend({

      intialize: function() {
      },

      defaults: {
        name: "",
        requestURI: ""
      }

  });
  context.DataModel = DataModel;

})(window.comicSearch);
