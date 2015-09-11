Items = new Meteor.Collection('items');

if (Meteor.isClient) {
  Meteor.subscribe('last-few-items');
}

if (Meteor.isServer) {
  Meteor.publish('last-few-items', function () {
    return Items.find({}, {sort: {order: -1}, limit: 3});
  });
}

// Seed the collection
if (Meteor.isServer) {
  Items.remove({});
  for (var i = 0; i < 10; i++) {
    Items.insert({title: 'Item ' + i, order: i});
  }
}
