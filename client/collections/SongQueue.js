// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
		//songQueue = [0,1,2,3,4];
  //el: '<audio controls autoplay />',
  initialize: function(){
  	///We need to render clicked songs into a queue
  		//and then if it is the only song we need to play it
  	this.on('add', this.playSong, this),
    //this.on('play', this.enqueue, this)
    this.on('dequeue', this.dequeue, this),

    this.on('ended', this.nextSong, this)

    // this.on('counter', this.counter, this)
    },

  playSong: function(song){
     if(this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function(song){
    //$el.pause();
    if(this.at(0) === song){
      this.nextSong();
    }else{
      this.remove(song)
    }
  },

  nextSong: function(ended){
      this.shift();
      if(this.length >= 1){
        this.playFirst();
      } else{
        this.trigger('stop');
      }
    
  },

  playFirst: function(){
     this.at(0).play();
  },
  // counter: function(song){
  //    return song;

  // }
});