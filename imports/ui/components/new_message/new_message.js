import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './new_message.html';

Template.NewMessage.events({
    'submit form'(e, t) {
        e.preventDefault();
        Meteor.call('messages.insert', 'massimo', e.currentTarget.newMessageBody.value, function(err, res) {
            e.currentTarget.newMessageBody.value = '';
            let div = document.getElementById('messages-scroll');
            // console.log(div);
            div.scrollTop = div.scrollHeight;
        });
    }
});