if (Meteor.isServer) {
  var MyPublisher = {
    _publishCursor: function (sub) {
      var handle = Items.find().observeChanges({
        added: function (id, doc) {
          sub.added('items', id, doc);
        },

        changed: function (id, doc) {
          sub.changed('items', id, doc);
        },

        removed: function (id) {
          sub.removed('items', id);
        }
      });

      sub.onStop(function () {
        handle.stop();
      });
    }
  };

  Meteor.publish('items', function () {
    return MyPublisher;
  });
}
