# _Assignment 02 - Igniting our App_

## What is "NPM"?

NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.
It's also known as "Ninja Pumpkin Mutants", "Nonprofit Pizza Makers", and a host of other random names that you can explore and probably contribute to over at npm-expansions.
NPM consists of two main parts:
1.a CLI (command-line interface) tool for publishing and downloading packages, and
2.an online repository that hosts JavaScript packages

## What is Parcel/Webpack? Why do we need it?

Parcel/Webpack are the example of a Bundler. Bundler is a development tool that combines many JavaScript files into a single one, which is production ready loadable in the browser. It is used because in order to improve the speed of our app/website, it is vital. For example, when a project becomes too large for a single file or when working with libraries that have multiple dependencies, it is essential to bundle them together. To include bundler we use "npm install -D parcel". -D because there are two types of dependencies. (A). Dev dependencies- there are required during the development phase , and (B)- Normal dependencies- they may be required in production or testing environment. Therefore, for Dev dependencies, we use "-D ". and All the bundling is done in development phase, thats why we install it in dev environment.

## What is .parcel-cache?>

It is a directory which is created automatically whenever Parcel executes some builds. To improve the performance, parcel utilizes caching. It stores the result of previous build operations in 'parcel-cache' directory. When we re-run parcel, it checks that are there any modifications in the file, if not, then parcel utilize that cached file to skip some processing steps to return faster builds.

## What is npx?

Basically npx is used for executing the package. It's purpose is to execute packages directly from npm registry or locally installed ones, without the need to explicitly install them as global dependencies. Npx first checks if the package name (in our case parcel) is present or not. If it is not present then it automatically downloads it temporarily in node_modules folder, and after executing any given action, it deletes it. (NOTE: when we run 'npx parcel index.html' , the terminal becomes unresponsive. In other words, it doesnot take any commands or clicks because it starts the development server and it continues to check for changes and make them visible on end side. Therefore, if we want to perform any other command, it is advisable to kill the terminal and start in a new one.)

## What is the difference between dependencies and devDependencies?

(1). Dev dependencies- there are required during the development phase , and
(2)- Normal dependencies- they may be required in production or testing environment.

## What is Tree Shaking?

Tree shaking is an inbuild feature of parcel which automatically removes the code from our JavaScript file (during the bundling process), which has not been in the use or dead code. It is done to not only optimize the size of the final bundle, but also to improve the performance of your application.

## What is Hot Module Replacement?

Hot module replacement is a process which enables real-time updates of modules and components in your application without requiring a full page reload. As soon as you save the changes, Parcel detects these modifications and recompiles the affected modules. These changes are seamlessly injected into the browser without losing the current application state. It detects the modifications using "FILE WATCHING ALGORITHM" which is written in C++.

## List down your 5 favourite superpowers of Parcel and describe any 3 of them in your own words?

Although there are multifarious superpowers of Parcel, the top 5 according to me are as follows: 1- Hot Module Replacement 2- Tree Shaking 3- Diagnosis(beautiful error handling) 4- Code splitting 5- Content hashing Now we will see three of them in detail: a) Whereas in the past errors were not very beautiful to our eyes. They are seen in the console without any detail and beutification. With Parcels' Diagnosis feature, not only they are shown in a beutiful manner, but also it suggest how to eradicate them effeciently. This makes the life of a developer a lot easier to debug.

b) Code splitting: It is a technique used by Parcel to break down a large JavaScript bundle into smaller more manageable chunks called 'split points' or 'chunks'. Each chunk represent a separate piece of code that can be loaded and executed independently when needed, rather than loading the entire bundle at once. This technique helps improve performance by reducing the initial load time and optimizing resource utilization. Parcel looks dependencies and analyse the boundaries where to split.

c)- Content Hashing: Parcel adds a unique identifier to file names based on their content, which enables long-term browser caching. It ensures that the correct version of a file is served to clients and to prevent caching issues. For example, orignal file name -> bundle.js. Parcel generate a hashed file name like bundle.82a54cd9.js. This ensures that whenever the content of the file changes, the file name also changes.

## What is .gitignore? What should we add and not add into it?

.gitignore is a file in which we add/include all those files which we do not want to push to production in order to avoid bloating the space environment. The files which can be re-generated again should not be pushed to the production. Therefore, these files are added to .gitignore. Some examples are /node_modules , /dist and .parcel-cache.

## What is the difference between the .package-json and .package-lock.json?

package.json holds important information about the project. Containing human-readable metadata about the project (like name, description) and functional metadata like package version and list of dependencies(either normal or dev) required by the application. {It is needed because its a central place to configure and describe how to interact with and run your application. It identifies project's dependencies and how to handle them.}

package-lock.json holds the exact version unlike the package.json which can contain approx values(~,^). It ensures that the same dependencies are installed consistently across different environments, such as development and production. It also helps to prevent issues with installing different package versions which can lead to errors and conflicts.

## Why should I not modify package-lock.json?

Because it is a generated file and should not be manually modified. It's purpose is to keep track of all the dependencies( and dependencies of dependencies) and their version, which changes with time. If we'll manually update it, it will break the synchronization between package.json and package-lock.json files.

## What is node_modules? Is it a good idea to push it on Git?

node_modules is kind of a database which contains all the code that we fetched from npm. It includes multifarious files although we only needed parcel. It is done because parcel can have its own dependencies and those dependencies can again have their own dependencies and so on..( This is also referred as Transitive Dependencies.)

## What is " dist " folder?

It is the output directory where the bundled and optimized files are generated during the build process. When you build a project with parcel, it takes your source code,processes it, and created a production-ready bundle that contains all the necessary files for your application to run. This bundle includes optimized and minified versions of HTML, CSS, JAVASCRIPT and other assets.

## What is 'browserlists'. Read about different bundlers vite,webpack, parcel.

Browserlist is a configuration file which allows you to define a list of target browsers or environments that your code should support. These tools determines which transformations are necessary to ensure compatibility with the specified targets. To illustrate, "browserlist":["Last 2 versions","Chrome >=70","not ie <= 11"] first includes the latest 2 versions of all major browsers second includes specified version of a browser last excludes specific browser or version.

## Explain Caret(^) and Tilda (~) in version?

At the outset, version is represented in this format. Major.Minor.Patch versions Including Caret(^) will automatically update the future Minor and Patch versions into our file. For example, ^1.2.3 will go untill <1.3.0 Including Tilda(~) will automatically update to all future Patch versions only. For example, ~1.2.3 will go untill < 1.3.0 It is therefore advisable to use caret because it will keep the file updated, however, major updates should not be done as it could break our code.

## Script types in HTML?

async defer crossorigin fetchpriority(high,low,auto)
