##EP-05 Lets get hooked

1.What is difference between named export , default export and \*as export?

1.In JavaScript, the export statement is used in modules to expose variables, functions, or classes so that they can be accessed and used in other parts of the application or in separate files.

By using the export, you make certain parts of your code accessible outside the module. This enables you to reuse and promote a modular and organized code structure.

Ans:In JavaScript, a default export is a way to share a single value, function, or class as the main thing from a file with other parts of your code.
exp: export default syntax.
Note: while importing the file: This means that when you import from that file in another part of your code, you don't need to use curly braces {} around the import statement.

EXP:// 📂 math.js
const add = (a, b) => a + b;
export default add;

// 📂 main.js
import myAddFunction from './math.js';
const result = myAddFunction(5, 10); // This will call the add function from math.js and store the result in the 'result' variable.
--What is the Named Export in JavaScript?
Named exports in JavaScript allow you to export multiple functions, variables, or classes from a single file as separate entities. Instead of exporting everything as a single unit, you can specifically name and export each part individually.

This gives you more control over what parts of the code you want to share with other modules. When importing these named exports into other files, you have to use the exact names that were used during the export, ensuring that you can access and use the specific functionalities you need from the source file.

Named Exports vs Default Exports:
A few characteristics of named exports are the following:

1.When you use named exports, you can export multiple values, functions, or classes from a single file, giving each of them a specific name.
2.You need to wrap the items you want to export in curly braces {} when importing them in another file, and you must use the exact names used during the export.
3.Named exports are great when you want to share multiple things from a file and give them distinct names to use in other parts of your code.
4.A file can have as many named exports as you like.

note2: What is the meaning of import _ Javascript?
The import _ as name syntax imports all exported content of a javascript file. For example, if you want to import an entire module's contents, then access the

## importance of config.js file

1.Having a separate configuration file allows you to access variables instantly and improves the maintainability of the codebase.
2.One purpose to add config.js file is to use static data which needs to be used all over the application.

## What are react hooks?

React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: useState : To manage states. Returns a stateful value and an updater function to update it.

## why do we need useState hook?

useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

export const CDN_URL =
'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/';

export const SWIGGY_URL =
'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8996676&lng=77.4826837&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

export const RESTAURANT_URL =
'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8996676&lng=77.4826837&restaurantId=626772&catalog_qa=undefined&submitAction=ENTER';

export const MENU_URL =
'https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8996676&lng=77.4826837&restaurantId=';
