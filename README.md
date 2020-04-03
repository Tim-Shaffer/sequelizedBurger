# Sequelized Burger
The purpose of this project was to highlight a Full Stack application setup using the **MVC** design pattern.  

This project updates the **Burger** project to use `sequelize` as well as adding some additional functionality with associating customers to the flow.

* The **MODEL** establishes the the database tables using *Sequelize* via files in the `models` folder.
* The **VIEW** is handled using *Express Handlebars* to present the data from the database based on files in the `views` folder.
* The **CONTROLLER** determines the routing of the information, `GET`, `POST`, or `PUT`, based on the files in the `controllers` folder. 


# Author 
> Tim Shaffer


## Contents
* [Deployment](https://github.com/Tim-Shaffer/sequelizedBurger#deployment)
* [Tech Used](https://github.com/Tim-Shaffer/sequelizedBurger#tech-used)
* [MVC Directory Structure](https://github.com/Tim-Shaffer/sequelizedBurgerr#mvc-directory-structure)
* [Instructions](https://github.com/Tim-Shaffer/sequelizedBurger#instructions)

# Deployment
The app is deployed to **HEROKU** at the following link:  https://tim-shaffer-burger2.herokuapp.com/

## Tech Used
* JavaScript
    * constructors
* Node.js
    * Express
        * get 
        * post
        * use
        * engine
        * set
        * handlebars
    * mysql
    * sequelize
* HTML 
* CSS
* Bootstrap
* jQuery
* MySQL
    * SQL 
        * CREATE DATABASE
        * USE DATABASE
        * CREATE TABLE
        * INSERT INTO
        * ALTER TABLE
        * SELECT 
        * UPDATE 

### MVC Directory Structure

```bash
├── sequelizedBurger
│   ├── config
│   │   └── config.js
│   ├── controllers
│   │   ├── burgers_controller.js
│   │   └── customers_controller.js
│   ├── db
│   │   └── schema.sql
│   ├── models
│   │   ├── burger.js
│   │   ├── customer.js
│   │   └── index.js
│   ├── public
│   │   └── assets
│   |       ├── css
│   │       |   └── burger_style.css
│   |       ├── img
│   │       |   └── Good_Burger.jpg
│   |       └── js
│   │           ├── burgers.js
│   │           └── customers.js
│   └── views
│       ├─── layouts
│       |       └── main.handlebars
│       ├─── partials
│       |       ├─── burgers
│       |       |    └── burger-block.handlebars
│       |       └─── customers
│       |            └── customer-block.handlebars
|       ├── cust_burger.handlebars
|       ├── customer.handlebars
│       └── index.handlebars
├── .gitignore
├── package.json
├── README.md
└── server.js
```

### Instructions

1. Clicking the **HEROKU** link -  - will take you to the Home Page.

    ![Screenshot for starting the app](./public/assets/img/HomePage.jpg)

1. Add a Burger that you would like to eat by entering it into the textbox.

    ![Screenshot for entering a new burger](./public/assets/img/EnterBurger.jpg)

1. Click the **Submit** button and the burger will be added to the Burgers To Eat list with an associated **Devour It!** button.

    ![Screenshot for submitting a new burger](./public/assets/img/SubmitBurger.jpg)

1. Enter more burgers to eat in the same manner.

    ![Screenshot for submitting more burgers](./public/assets/img/MoreBurgers.jpg)
    
1. Click on a particular burgers **Devour It!** button and the burger will be updated as *devoured* and moved to the Burgers Already Eaten list.

    ![Screenshot for devouring a burger](./public/assets/img/DevourBurger.jpg)