// Fill the DB with example data on startup

import { Meteor }  from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Messages } from '../../api/messages/messages.js'

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }

  if (Messages.find().count() === 0) {
    // const data = [
    //   {
    //     username: 'massimo',
    //     body: 'This is message body 1',
    //     createdAt: new Date(),
    //   },
    //   {
    //     username: 'john',
    //     body: 'This is message body 2',
    //     createdAt: new Date(),
    //   },
    //   {
    //     username: 'mike',
    //     body: 'This is message body 3',
    //     createdAt: new Date(),
    //   },
    //   {
    //     username: 'alice',
    //     body: 'This is message body 4',
    //     createdAt: new Date(),
    //   },
    //   {
    //     username: 'massimo',
    //     body: 'This is message body 5',
    //     createdAt: new Date(),
    //   },
    //   {
    //     username: 'john',
    //     body: 'This is message body 6',
    //     createdAt: new Date(),
    //   },
      
    // ];

    let data =[];
    for (let i=0; i < 5000; i++) {
      data.push({
        username: 'Buddy',
        body: 'Messages number ' +i,
        createdAt: new Date()
      })
    }

    data.forEach(message => Messages.insert(message));
  }
});
