# Landscape Architect Plant Library: Java, Spring Framework, PostgreSQL, Reactive Programming 
A prototype for an e-library which allows users to create, search, update, and delete information about plants based on the needs of Landscape Architects. The back -end is a CRUD REST service and the front-end uses reactive programming. 

**Check out this prototype on heroku:** https://landscape-architect-library.herokuapp.com/

**Note:** This code represents the MVP version; it does not expose anything from the official prototype.

## Features

* Users can add a plant's profile.
* Users can edit a plant's profile.
* Users can publish or unpublish a plant's profile.
* Users can search for a plant's profile.
* Users can delete a plant's profile.
* Users can see the list of all the existing plants.

## Tech stack

  ### Back-end
  * CRUD REST API
  * Java
  * Spring Web MVC to export REST API.
  * Spring Data JPA to interact with PosthreSQL database.
  * Maven (build automation tool)
  * PostgreSQL as the Database

  ### Front-end

  * React: used create-react-app to set up development environment; it creates a frontend build pipeline.
  * NPM (package manager)
  * JavaScript
  * Redux (State management) 
  * React Router Dom to implement dynamic routing in a web app.
  * Axios to send HTTP Requests and retrieve HTTP Responses.
  * Bootstrap (HTML and CSS framework for templates and responsive designs)

## Development In progress

* Implementing authentication/authorization using Spring Security and Jason Web Token.
* Integrating AWS S3 to store images of plants. Note: Will use both: PostgreSQL & AWS S3.
* Defining requirements to source data from a third party's database.
* Dockerizing App.

## Testing API on Postman 

This is a collection of requests tested: https://documenter.getpostman.com/view/16169448/UV5Rmfa1

## Starting the app on your local computer

* The BE & FE have been integrated within the pom.xml: added configuration (used maven-resources-plugin) so the files from React build folder were copied to src/target/classes/static folder of the Spring Boot project.

* Build and run the Spring Boot server with commands:

**mvn clean install**
**mvn spring-boot:run**
**Open browser with url: http://localhost:8080/**

**Note:** You must have installed in your local computer: 
Java 8 (JDK), PostgreSQL, Maven.
