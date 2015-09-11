
## <a href="https://www.eventedmind.com/classes/pub-sub-in-meteor" target="_blank">Class: Publish Subscribe in Meteor</a>

**Meteor**<br>
**Core**

In the Meteor PubSub system the server publishes data to subscribing clients. On the server, you'll take a detailed look at the mechanics of publish functions. On the client, you'll see what happens when publish messages come off the wire. 

**What's in this class?**


* <a href="https://www.eventedmind.com/classes/pub-sub-in-meteor/pub-sub-in-meteor" target="_blank">PubSub in Meteor</a> - Meteor subscriptions determine what data a client can see. In this video I'll give you a tour of subscriptions with a few examples.

* <a href="https://www.eventedmind.com/classes/pub-sub-in-meteor/mechanics-of-pubsub" target="_blank">Mechanics of PubSub</a> - What exactly happens when a client subscribes to a named subscription? In this video we'll look at the DDP messages and the mechanics of a subscription. We'll pause in the server debugger and send a few messages by hand.

* <a href="https://www.eventedmind.com/classes/pub-sub-in-meteor/publishing-a-cursor" target="_blank">Publishing a Cursor</a> - So far we've been sending messages in our subscription functions by hand. But typically in our applications we return a cursor from a Mongo query instead. Why does this work? In this video we'll explore what happens when you return a cursor from a subscription function.

* <a href="https://www.eventedmind.com/classes/pub-sub-in-meteor/merging-the-client-view-of-data" target="_blank">Merging the Client View of Data</a> - Meteor has to keep track of what data a connected client has already seen. The server does this so that it can always send the minimum number of messages required to get a client up to date with the latest data. Sometimes, you have multiple subscriptions that publish messages about the same collection. Meteor has to merge these messages into a single stream of added, changed and removed messages about a given collection. Sometimes this mechanism is called the "Merge Box." In this video I'll show you what this means and how it works.

* <a href="https://www.eventedmind.com/classes/pub-sub-in-meteor/the-connection-data-store" target="_blank">The Connection Data Store</a> - We've spent a lot of time looking at how a server-side publish function sends added, changed and removed messages for a collection. But what happens to those messages on the client? How does Meteor connect those messages to a browser database cache like MiniMongo? It uses something called a Store. In this video we'll create our own store so you can see the minimum interface between MiniMongo and a Livedata connection.



