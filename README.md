# Zoo Forum | Members Only

A backend focused app that allows users to sign up, log in and add new messages to the database. Registerd users also have different level of permission. Non-Authorised and simple users can't see message's author and date. Members and Admin can see it. And only
Admins can delete messages from database.
During the time of making this project I learned about passport.js and it's authentication Strategies. And also refreshed my mongoose knowledge.

<!-- > - [Live Demo](https://rocky-crag-22230.herokuapp.com/) -->

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- Javascript
- [MongoDB](https://www.mongodb.com) - Database
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/) - View engine
- [Passport.js](http://www.passportjs.org/) - Authentication
- [Heroku](https://www.heroku.com/) - Hosting

### Secret Passwords:

An administrator password has been added to act as an extremely basic security feature. Messages cannot be deleted from the database unless the admin password, `secretadminpass`, is entered into the input field.
A member password has been added to show project's feature that users has different level of permission. Message author and date 
can't be seen unless the password, `secretmemberpass`, is entered into the input field.

### Installing and running

Don't forget to set your own MongoDB database

```bash
git clone https://github.com/RustamYuburov/members-only
cd inventory-application
npm install
npm run serverstart
```

## Showcase

### Homepage

![homepage](https://user-images.githubusercontent.com/66270461/146673253-5b534889-9614-4f26-80e3-aa861092a9a8.png)

### Sign up page

![signup](https://user-images.githubusercontent.com/66270461/146673252-d30fe822-fa8f-434f-ba0a-f80a5e0fc0b2.png)

### Become member form

![become-member](https://user-images.githubusercontent.com/66270461/146673251-0732924c-7bf5-4bac-a09f-e68b66a5fcae.png)
