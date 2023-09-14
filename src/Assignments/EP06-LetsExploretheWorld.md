# Assignment 06 - Lets Explore the World

## What are Microservices?

Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

--Characteristics of Microservices

1. Autonomous
   Each component service in a microservices architecture can be developed, deployed, operated, and scaled without affecting the functioning of other services. Services do not need to share any of their code or implementation with other services. Any communication between individual components happens via well-defined APIs.

2. Specialized
   Each service is designed for a set of capabilities and focuses on solving a specific problem. If developers contribute more code to a service over time and the service becomes complex, it can be broken into smaller services.

--Benefits of Microservices

1. Agility
   Microservices foster an organization of small, independent teams that take ownership of their services. Teams act within a small and well understood context, and are empowered to work more independently and more quickly. This shortens development cycle times. You benefit significantly from the aggregate throughput of the organization.

2. Flexible Scaling
   Microservices allow each service to be independently scaled to meet demand for the application feature it supports. This enables teams to right-size infrastructure needs, accurately measure the cost of a feature, and maintain availability if a service experiences a spike in demand.

3. Easy Deployment
   Microservices enable continuous integration and continuous delivery, making it easy to try out new ideas and to roll back if something doesn’t work. The low cost of failure enables experimentation, makes it easier to update code, and accelerates time-to-market for new features.

4. Technological Freedom
   Microservices architectures don’t follow a “one size fits all” approach. Teams have the freedom to choose the best tool to solve their specific problems. As a consequence, teams building microservices can choose the best tool for each job.

5. Reusable Code
   Dividing software into small, well-defined modules enables teams to use functions for multiple purposes. A service written for a certain function can be used as a building block for another feature. This allows an application to bootstrap off itself, as developers can create new capabilities without writing code from scratch.

6. Resilience
   Service independence increases an application’s resistance to failure. In a monolithic architecture, if a single component fails, it can cause the entire application to fail. With microservices, applications handle total service failure by degrading functionality and not crashing the entire application.

## What is Monolithic Architecture?

With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

## What is difference between Monolithic and microservices?

Monolithic vs. Microservices Architecture
With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

## Why do we need a useEffect hook?

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

Exp: import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
const [count, setCount] = useState(0);

useEffect(() => {
setTimeout(() => {
setCount((count) => count + 1);
}, 1000);
});

return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

## What is optional chaining?

Optional chaining (?.)
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

## What is shimmer UI?

A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.
Examples of shimmer UI
Here are some examples of shimmer UI in action:

Facebook uses shimmer UI to show loading states for posts, comments, stories, and other elements in its app and website.
LinkedIn uses shimmer UI to show loading states for profiles, articles, jobs, and other elements in its app.
Netflix uses shimmer UI to show loading states for movies, shows, genres, and other elements in its app.
Youtube uses shimmer UI to show loading states on the landing page.
Swiggy and Zomato use shimmer UI to show loading states on the landing page on their website and apps.

Shimmer UI is a better way to show loading states in your web or mobile app. It improves the user experience by providing visual feedback, reducing cognitive load, eliminating surprises, and enhancing aesthetic appeal. It can be implemented using different platforms and frameworks such as Flutter, Microsoft Fluent UI for Shiny, or HTML and CSS. Next time you need to show loading states in your app, consider using a shimmer UI instead of a spinner or a progress bar.

## What is the difference between JS expression and JS statement?

Expressions can be assigned or used as operands, while statements can only be declared.

Statements create side effects to be useful, while expressions are values or execute to values.

Expressions are unique in meaning, while statements are two-sided in execution. For example, 1 has a certain value while go( ) may be executed or not.

## What is conditional rendering , explain with code example?

In React, conditional rendering is the process of displaying different content based on certain conditions or states. It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions. In this process, you can use conditional statements to decide what content should be rendered.

example:
function Greeting(props) {
const isLoggedIn = props.isLoggedIn;
return (

<div>
{isLoggedIn ? (
<h1>Welcome back!</h1>
) : (
<h1>Please sign up.</h1>
)}
</div>
);
}

## What is CORS?

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

## What is async and await?

JavaScript is Synchronous in nature which means that it has an event loop that allows you to queue up an action that won’t take place until the loop is available sometime after the code that queued the action has finished executing. But there are a lot of functionalities in our program which make our code Asynchronous and one of them is the Async/Await functionality.

--Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

exp: const getData = async () => {
let data = "Hello World";
return data;
}

getData().then(data => console.log(data));

What is Await Function ?
Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

Example 2: This example shows the basic use of the await keyword in JavaScript.
Example
const getData = async () => {
let y = await "Hello World";
console.log(y);
}

console.log(1);
getData();
console.log(2);

## What is the use of 'const json=await data.json();' in getRestaurants()?

https://dmitripavlutin.com/javascript-fetch-async-await/
The Fetch API is the default tool for performing network operations in web applications. Although fetch() is generally easy to use, there are some nuances to be aware of.

response.json() is a method of the Response object that allows a JSON object to be extracted from the response. The method returns a promise, so you have to wait for the JSON: await response.json().

The Response object offers a lot of useful methods (all returning promises):

response.json() returns a promise resolved to a JSON object
