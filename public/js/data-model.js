if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var DataModel = Backbone.Model.extend({

      defaults: {
        name: "",
        requestURI: "",
      }

  });
  context.DataModel = DataModel;

})(window.comicSearch);
