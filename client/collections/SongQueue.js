// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
		//songQueue = [0,1,2,3,4];
  initialize: function(){
  	///We need to render clicked songs into a queue
  		//and then if it is the only song we need to play it
  	this.on('add', this.playFirst, this),
    //this.on('play', this.enqueue, this)
    this.on('remove', this.dequeue, this)
    
    },


  ///////I added a playFirst function, because the specs wanted it
  ///////It needs to play the first song entered into a queue. Which,
  //////is what our enqueue does. 
  playFirst: function(){
     if(this.length === 1){
      this.at(0).play();
    }
  }
  
});