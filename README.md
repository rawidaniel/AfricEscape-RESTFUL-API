# <p align="center">AfricEscape RESTFUL API</p>

## <p align="center">A RESTFUL API for booking tour sites</p>

---

### Introduction

---

<p align="justify">
AfricEscape is a RESTful API that provides details on numerous travel destinations. Also, It offers authentication and authorisation, users, reviews, and booking information all in json format. A tour booking website that enables users to explore a website, select their chosen location to visit, and make an online reservation can be built on top of this RESTFUL API.</p>

### Key features

---

- Authentication and Authorization
  - Signup, Login and Logout
- Tour
  - Creating, Getting, updating and Deleting tours
- User
  - Creating, Getting, updating and Deleting users
- Booking
  - Creating, Getting, updating and Deleting booking
- Review
  - Creating, Getting, updating and Deleting reviews

### How to install

---

- clone this repository [here](https://github.com/rawidaniel/AfricEscape-RESTFUL-API)

  `git clone https://github.com/rawidaniel/AfricEscape-RESTFUL-API`

- Run **npm install** to install all dependencies
- You can either work with the MongoDB Atlas or use your locally installed MongoDB. Do configure to your choice in the application entry file. you can watch youtube tutuorials from [here](https://www.youtube.com/watch?v=PmjTR5FvnuE&t=186s)
- Create an config.env file in your project root folder and add your variables. See config.env.sample for assistance.
- use **npm run debug** for debugging

### Usage

---

- Run **npm start:dev** to start the application for development and **npm start:prod** for production.

### API Endpoints

---

You must configure the variables in Postman based on your environment(development or production) before using the API. Simply add:

```
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
- {{password}} with your user password as value.
```

<!-- Check out <a href="https://documenter.getpostman.com/view/26057175/2s93RQTDxC" target="_blank">AfricEscape API Documentaion</a> for more information. -->

Check out [AfricEscape API Documentaion](https://documenter.getpostman.com/view/26057175/2s93RQTDxC) for more information.

### Technologies Used

---

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
- [MongoDB Atlas ](https://www.mongodb.com/atlas/database) A cloud database service
- [Postman](https://www.postman.com/) An API platform for building and using APIs

### Authors

---

- [Rawi Daniel](https://github.com/rawidaniel)
- [Ikram Awol](https://github.com/ikramawol)
