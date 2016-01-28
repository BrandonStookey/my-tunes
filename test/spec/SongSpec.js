describe('SongModel', function() {
  var model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    });
    sinon.spy(model, 'trigger');
  });

  describe('play', function() {
    it('triggers a "play" event', function() {
      model.play();
      expect(model.trigger).to.have.been.calledWith('play', model);
    });
  });

  describe('selectQueue', function() {
    it('triggers an "selectQueue" event', function() {
      model.selectQueue();
      expect(model.trigger).to.have.been.calledWith('selectQueue', model);
    });
  });

  xdescribe('dequeue', function() {
    it('triggers a "dequeue" event', function() {
      model.dequeue();
      expect(model.trigger).to.have.been.calledWith('dequeue', model);
    });
  });

  xdescribe('ended', function() {
    it('triggers an "ended" event', function() {
      model.play();
      model.ended();
      expect(model.trigger).to.have.been.calledWith('ended', model);
    });
  });
});
