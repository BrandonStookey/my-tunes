// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  selectQueue: function(){
  	this.trigger('selectQueue', this);
  },

  dequeue: function(){
		this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  nextSong: function (){
    this.trigger('nextSong', this);
  },

  playNext: function(){
    this.trigger('playNext', this)
  },

  playFirst: function(song){
    this.trigger('playFirst', this)
  },

  counter: function(){
    this.trigger('counter', this);
  }
  // isEnded: function(){
  //   this.trigger('isEnded', this)
  // }
});
