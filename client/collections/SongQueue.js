// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
		//songQueue = [0,1,2,3,4];
  //el: '<audio controls autoplay />',
  initialize: function(){
  	///We need to render clicked songs into a queue
  		//and then if it is the only song we need to play it
  	this.on('add', this.playFirst, this),
    //this.on('play', this.enqueue, this)
    this.on('dequeue', this.dequeue, this),

    this.on('ended', this.nextSong, this)

    },

  playFirst: function(song){
     if(this.length === 1){
      this.at(0).play();
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

  nextSong: function(){
    this.shift();
    if(this.length >= 1){
      this.at(0).play();
    } else{
      
    }
  }
});