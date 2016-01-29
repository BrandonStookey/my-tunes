// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr', //defines a row of cells in a table.
   //className: "LibraryEntryView",
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.selectQueue();//enqueue WAS this.model.play();
      this.model.play();
      //this.model.counter();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
    //What is this.model.attributes? Is this how songs are being
    //appened to the page????
  }

});

