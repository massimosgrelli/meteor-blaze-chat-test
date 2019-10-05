import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
// import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

import '../../ui/pages/chat/chat.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('Body', { main: 'Chat' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Body', { main: 'App_notFound' });
  },
};
