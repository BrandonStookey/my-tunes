// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  // isEnded: function(){
  //   var isEnded = this.$el.ended;
  //   return isEnded;
  // },

   initialize: function() {
    // this.isEnded();
    // this.nextSong(isEnded);
    // this.$el.bind('ended'); //this.$el.bind
    this.$el.on('ended', function(){ 
      this.model.ended();
    }.bind(this));
  },


  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended
//var isEnded = audioOrVideo.ended

// var obj = document.createElement('audio');
// console.log(obj.ended); // false

///if(isEnded){
  //then splice(song,1) or shift and dequeue only shift inside of songqueue.js
  //increment inside array
  //then unshift
//}