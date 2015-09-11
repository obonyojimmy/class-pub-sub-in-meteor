if (Meteor.isClient) {
  Meteor.connection.registerStore('items', {
    beginUpdate: function (batchSize, reset) {
      console.log('*********************');
      console.log('beginUpdate', 'batchSize: ' + batchSize);
    },

    update: function (msg) {
      console.log('update', JSON.stringify(msg));
    },

    endUpdate: function () {
      console.log('endUpdate');
      console.log('*********************');
    }
  });

  handle = Meteor.subscribe('items');
}

if (Meteor.isServer) {
  Meteor.publish('items', function () {
    var self = this;
    self.added('items', '1', {title: 'One'});

    setTimeout(function () {
      self.changed('items', '1', {title: 'Changed One'});
    }, 3000);

    setTimeout(function () {
      self.removed('items', '1');
    }, 6000);
  });
}
