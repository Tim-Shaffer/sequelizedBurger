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
* [MVC Directory Structure](https://github.com/Tim-Shaffer/sequelizedBurger#mvc-directory-structure)
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

1. From the Main Menu you can Mange Customers or Order Burgers.  However, if you try to go to Order Burgers before adding any customers, it will take you to the Manage Customers view instead.

    ![Screenshot for entering a new customer](./public/assets/img/CustomerHome.jpg)

1. Add a Customer by entering it into the textbox.

    ![Screenshot for entering a new customer](./public/assets/img/EnterCustomer.jpg)

1. Click the **Submit** button and the Customer will be added to a Customer table along with # of burgers, a direct link to Order Burgers for that Customer, and a Delete Customer link.

    ![Screenshot for submitting a new customer](./public/assets/img/SubmitCustomer.jpg)
    
1. Now, burgers can be ordered for a customer!.  Selecting **Order** next to the customer will take you to the Burger Ordering screen and default the Customer Name into the selection box.

    ![Screenshot for ordering a burger per customer](./public/assets/img/EnterBurger.jpg)

1. Add a Burger that you would like to order for the customer by entering it into the textbox.

    ![Screenshot for entering a new burger](./public/assets/img/EnterCustomerBurger.jpg)

1. Click the **Submit** button and the burger will be added to the Burgers To Eat list with an associated **Devour It!** button.

    ![Screenshot for submitting a new burger](./public/assets/img/SubmitBurger.jpg)

1. Enter more burgers to eat in the same manner.

    ![Screenshot for submitting more burgers](./public/assets/img/MoreBurgers.jpg)

1. Click on a particular burgers **Devour It!** button and the burger will be updated as *devoured* and moved to the Burgers Already Eaten list.

    ![Screenshot for devouring a burger](./public/assets/img/DevourBurger.jpg)

1. Return to the Customer's View by selecting the **Manage Customers** button and the page will now show the total burgers processed per customer.

    ![Screenshot for showing Customer totals](./public/assets/img/DisplayCustomer.jpg)

1. Add multiple customers and associate burgers in the same manner as above and the display will show all the customers and their burger totals on separate lines.

    ![Screenshot for showing Customer totals](./public/assets/img/DisplayMultCustomers.jpg)

1. Return to the Home Page by clicking **Go to Main Menu**.

    ![Screenshot for main menu](./public/assets/img/HomePage.jpg)

1. Selecting **Order Burgers** at this point will display all the burgers and the customers on the same screen.

    ![Screenshot for All Burgers](./public/assets/img/AllCustomerBurgers.jpg)

1. More burgers can be added by selecting the customer from the list, entering a new burger, and then clicking **Submit** like the prior flow.

    ![Screenshot for starting the app](./public/assets/img/SubmitCustomerBurger.jpg)

1. The burger is added with the associated Customer.  The normal function of *devouring* a burger can also be done from this view.

    ![Screenshot for showing Customer totals](./public/assets/img/DisplayMultCustomers2.jpg)

1. Return to the Manage Customer display and it will show all the customers and their burger totals on separate lines.

    ![Screenshot for showing Customer totals](./public/assets/img/DisplayMultCustomers3.jpg)

1. To remove a Customer and all the burgers associated with them, select the **Delete Customer** option on the line of that customer.

    ![Screenshot for showing Customer totals](./public/assets/img/DisplayMultCustomers4.jpg)


