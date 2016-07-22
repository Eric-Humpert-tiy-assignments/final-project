if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {

    var DataModel = Backbone.Model.extend({

      defaults: {
        name: "",
        requestURI: ""
      },

      initialize: function() {
        this.set('comicsData', [])
      },

      buildComicList: function(comic) {
        var comicList = this.get("comicsData");
        comicList.push(comic);
        this.set("comicsData", comicList)
      }

  });
  context.DataModel = DataModel;

})(window.comicSearch);
