// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr', //defines a row of cells in a table.

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});





