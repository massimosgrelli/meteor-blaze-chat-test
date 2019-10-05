import { Template } from 'meteor/templating';
import './message.html';
import moment from 'moment';

Template.Message.helpers({
    timestamp() {
        return moment(this.createdAt).format('MM/DD/YYYY hh:mm:ss');
    }
});