if (Meteor.isServer) {
  Meteor.publish('items', function (id) {
    var self = this;
    this.added('items', '1', {title: 'One'});
    this.added('items', '2', {title: 'Two'});
    this.ready();

    setInterval(function () {
      self.changed('items', '1', {title: 'One ' + Meteor.uuid()});
    }, 2000);
  });
}
