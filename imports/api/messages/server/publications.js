import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages.js';

Meteor.publish('messages.all', function() {
    return Messages.find({});
})