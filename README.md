# Deploying a `json-server` app to Heroku



<br>



## `json-server` package


To speed up the initial development of the web apps and creation of the initial MVP, developers sometimes use packages/libraries that enable easy creation of API's without the need to code the entire server structure.

One of such tools is a `npm` package called [`json-server`](https://www.npmjs.com/package/json-server).

[`json-server`](https://www.npmjs.com/package/json-server) is a package that can be easily installed and run on the cloud hosting solution and it only requires a properly formated `.json` file.



<br>



## Getting Started



<br>



This repository includes the complete setup needed for deploying a `json-server` app to Heroku.

Steps:

1. [Fork and Clone the repository.](#fork-and-clone)
2. [Add the custom `db.json` file.](#add-custom-db-json)
3. [Deploy `json-server` app to Heroku.](#deploy-to-heroku)



<br>



<a name="fork-and-clone"></a>

###  Fork and clone the repository 



Before adding a custom `db.json` file you should **Fork** this repo to your user account. 

Once done **Clone** that repo to your local machine by using the link from your own repository.



<br>



<a name="add-custom-db-json"></a>

### Add the custom `db.json` file



#### `db.json` file

`db.json` file being loaded as a mock database.

Once run, `json-server` loads the provided file `db.json`, and uses the first level property names of the object as the server endpoints.



<br>



`json-server` will make these first level properties into server endpoints `domain.com/posts`, `domain.com/comments`, `domain.com/profile` .



<br>



Give it a try with the deployed server example. 

The below url's belong to the server deployed with the example code in this repo, using the `db.json` file that you will find in this repo.



 Open the below links in your browser or make `GET` request using [Postman](https://www.postman.com/), to see how `db.json` is transformed into server endpoints:

<br>



##### [https://json-server-ih.herokuapp.com](https://json-server-ih.herokuapp.com/)

##### https://json-server-ih.herokuapp.com/posts

##### https://json-server-ih.herokuapp.com/comments

##### https://json-server-ih.herokuapp.com/profiles

<hr>

##### https://json-server-ih.herokuapp.com/posts/1

##### https://json-server-ih.herokuapp.com/profiles/5



<br>



#### Creating custom endpoints

In order to create custom endpoints on your server, you need to include them in the `db.json` file.



You can replace the existing `db.json` file with your own file in order to get custom endpoints and data that will be served. 

Only rule that should be observed is that file must be named `db.json` and be placed in the root directory of the project, as it is in this starter code example.



<br>



<a name="deploy-to-heroku"></a> 

### Deploy `json-server` to Heroku



#### Sign up for Heroku

If you don't have a Heroku account you should [Sign up / create Heroku account](https://signup.heroku.com/). 



<br>

#### Install the Heroku CLI

Check if you have the Heroku CLI installed.

To [verify your Heroku CLI installation](), use the `heroku --version` command:



```bash
heroku --version

# If already installed you should get something like this:
heroku/7.0.0 (darwin-x64) node-v8.0.0 
```



<br>



#### Login to Heroku

After you ensure that Heroku CLI is installed, run the `heroku login` command. 

You’ll be prompted to enter any key to go to your web browser to complete login. The CLI will then log you in automatically.

```bash
heroku login
```



<br>



#### Create a new Heroku app

Before running the below commands, using the terminal navigate to the root directory of the cloned server project.

To create a new Heroku app/project run the command (in order for your app to have a custom name, change the `name-of-your-server-app` part to include name that you want) from the root directory of the cloned project:

```bash
heroku create name-of-your-server-app
```



<br>



Running the above command will create the new Heroku/app project and also add new `git remote` to the current project, pointing to Heroku which we will use to push the code from our machine to Heroku.

To check the newly added `git remote` you run the command:

```bash
git remote -v
```





<br>



#### Push to Heroku

This is the final step, which pushes our local code to Heroku dyne which will instantiate the new server and run it automatically.

Commit all the updates and then push to heroku by running the command:

```bash
git push heroku master
```



<br>



#### Done! ✅ 

Once done you will be able to make the HTTP requests using the URL of your Heroku app and the endpoints created from the `db.json`. 

Visit the https://dashboard.heroku.com/apps to see the newly created (and running) `json-server` app. 😊 