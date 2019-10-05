import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './messages.html';
import './../message/message.js';
import './../new_message/new_message.js';
import { Messages } from '../../../api/messages/messages.js';

Template.Messages.onCreated(function() {
    this.loadTime = new ReactiveVar(0);
    this.subscribe('messages.all');
});

Template.Messages.helpers({
    messages() {
        let start = new Date().getTime();
        let ret = Messages.find({});
        let end = new Date().getTime();
        Template.instance().loadTime.set(end - start);
        return ret;
    },
    count() {
        return Messages.find().count();
    },
    loadTime() {
        return Template.instance().loadTime.get();
    }
});