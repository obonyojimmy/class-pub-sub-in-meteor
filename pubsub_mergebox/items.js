Items = new Meteor.Collection('items');

if (Meteor.isServer) {
  Items.remove({});
  for (var i = 0; i < 10; i++) {
    Items.insert({title: 'Item ' + i, order: i});
  }
}
