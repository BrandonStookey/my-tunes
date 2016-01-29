// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
   tagName: "table",

   initialize: function() {
    this.collection.on('add remove ended', this.render, this);
    this.render();
  	},
  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
      	//only take something that is clicked
        return new SongQueueEntryView({model: song}).render(); 
      })
    );
  }
});
