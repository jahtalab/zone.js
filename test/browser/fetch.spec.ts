describe('fetch', function () {
  var testZone: Zone;

  beforeEach(() => {
    testZone = Zone.current.fork({ name: 'test' });
  });

  it('should work', function () {
    if (window.fetch) {
      testZone.run(function () {
        var p = window.fetch('/')
        p.then(function () { })
      })
    }
  })
})
