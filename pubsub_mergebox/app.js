if (Meteor.isServer) {
  var doc = { _id: '1', title: 'One' };

  Meteor.publish('best-item', function () {
    this.added('items', doc._id, { title: 'One' });
    this.ready();
  });

  Meteor.publish('most-recent-item', function () {
    this.added('items', doc._id, { title: 'One', desc: 'Hello world' });
    this.ready();
  });
}
