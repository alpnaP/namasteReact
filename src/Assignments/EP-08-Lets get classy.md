# https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## How do you create Nested Routes react-router-dom cofiguration?

Answer: For nested routes in React JS Define the children routes inside the Route component of the Parent route. In react-router-dom v6 use Route with element and path attribute encapsulated in Routes. Inside the parent route use the Outlet component after the links of child components to show the link and switch between the child components rendering in Parent as shown in the example below.

## Read abt createHashRouter, createMemoryRouter from React Router docs.

1. createHashRouter
   This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

   2. createMemoryRouter

   Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
   Link: https://reactrouter.com/en/main

## what is the order of life cycle method calls in class based components

Link: https://www.freecodecamp.org/news/react-component-lifecycle-methods/

Link2: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Why do we use componentDidMount?

componentDidMount is the final step of the mounting process. Using the componentDidMount() method, we can execute the React code when the component has already been placed in the DOM (Document Object Model). It is used for handling for handling all network requests and setting up subscriptions.

## Why do we use componentWillUnmount? Show with example

componentWillUnmount() : This method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase.

##
