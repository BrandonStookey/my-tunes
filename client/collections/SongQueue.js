// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
		//songQueue = [0,1,2,3,4];
  initialize: function(){
  	///We need to render clicked songs into a queue
  		//and then if it is the only song we need to play it
  	this.on('add', this.enqueue, this)
  	},

  // enqueue: function(){
  // 	if(this.length === 1){
  // 		this.model.play;
  // 	}
  
  // }
	
});