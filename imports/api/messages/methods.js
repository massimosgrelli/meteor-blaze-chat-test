import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Messages } from './messages.js';

Meteor.methods({
  'messages.insert'(username, body) {
    check(username, String);
    check(body, String);
    
    return Messages.insert({
      username,
      body,
      createdAt: new Date(),
    });
  },
  'message.delete'(messageId) {
    check(messageId, String);

    return Messages.delete({messageId});
  }
});