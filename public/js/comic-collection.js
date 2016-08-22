if (window.comicSearch === undefined) { window.comicSearch = {}; }

(function(context) {
  var ComicCollection = Backbone.Collection.extend({
    model: context.ComicModel,

    intialize: function() {
      _.bindAll(this, 'render', 'arrangeComicData');
    },

    arrangeComicData: function(model) {
      this.render();
    },

    render: function() {
      console.log("Can you see this collection?");
    }
  });
  context.ComicCollection = ComicCollection;

})(window.comicSearch);
