Meteor.publish('publicLists', function() {
  return Lists.find({userId: {$exists: false}});
});

Meteor.publish('privateLists', function() {
  if (this.userId) {
    return Lists.find({userId: this.userId});
  } else {
    this.ready();
  }
});

Meteor.publish('todos', function(listId) {
  check(listId, String);

  return Todos.find({listId: listId});
});

Meteor.publish('share', function() {
  var us=Meteor.user().emails[0].address;
  if (this.userId) {
    return Share.find({sharedTO:us});
  } else {
    this.ready();
  }
});



