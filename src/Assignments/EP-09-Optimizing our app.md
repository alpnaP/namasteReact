Chapter 09 - Optimizing our App

## When and why do we need lazy()?

Lazy Loading in React JS helps to optimize the performance of React applications. The data is only rendered when visited or scrolled it can be images, scripts, etc. Lazy loading helps to load the web page quickly and presents the limited content to the user that is needed for the interaction lazy loading can be more helpful in applications that have high-resolution images or data that alters the loading time of the application.

## what is suspense?

"Suspense" is generally used to refer to a new way of building React apps using the concurrent rendering engine introduced in React 18. It's also a specific React API, <Suspense /> , a component that lets you display a fallback until its children have finished loading.

## Why we got this error : A component suspended while responding tosynchronous input. This will cause the UI to be replaced with a loading indicator.To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

Need to check

## Advantages and disadvantages of using this code splitting pattern?

Faster Initial Load Times. ...
Improved User Experience. ...
Improved Performance. ...
Lower Bounce Rates. ...
Bandwidth Efficiency. ...
Optimized Resource Delivery. ...
Improved Caching. ...
Parallel Loading.

Link : https://medium.com/founding-ithaka/strategies-to-split-code-in-your-react-app-2c3c86953748

## When do we and why do we need suspense?

<Suspense> lets you display a fallback until its children have finished loading.

<Suspense fallback={<Loading />}>
<SomeComponent />
</Suspense>

Link: https://react.dev/reference/react/Suspense

##References:
● https://reactjs.org/docs/hooks-custom.html
● https://beta.reactjs.org/apis/react/lazy#suspense-for-code-splitting
