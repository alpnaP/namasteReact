# _Assignment 03 - Laying the foundation_

## What is JSX?

JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.
example: const jsx = <h1>This is JSX</h1>
This is simple JSX code in React. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.

So to convert it to browser understandable JavaScript code, we use a tool like Babel which is a JavaScript compiler/transpiler.

## Superpower of JSX?

1.Every JSX tag is converted to React.createElement call and its object representation.
2.JSX Expressions, which are written inside curly brackets, allow only things that evaluate to some value like string, number, array map method and so on.
3.In React, we have to use className instead of class for adding classes to the HTML element
4.All attribute names in React are written in camelCase.
5.undefined, null, and boolean are not displayed on the UI when used inside JSX.

## Role of type attribute in script tag?what options can I use there?

The HTML <script> type Attribute is used to specify the MIME type of script and identify the content of the Tag. It has a Default value which is “text/javascript”.

--->options:
1.text/javascript: It indicates the content of the script is javascript.
2.module: It is used when you want to include javascript code as an ES6 module.It allows us to import/export the code.
3.application/javascript: similar to text/javascript which indicates the content of the script is javascript code.

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

All three of them does the samething.
1.{} : This notation is used to execute any piece of js code inside the JSX.'TitleComponent' is used inside this,as it is basically a js function which returns a JSX(React Element). 2.<TitleComponent/>: This is the notation to render any react functional component.If it is used inside another functional component, it is called as 'Component Composition'. 3.<TitleComponent><TitleComponent/>: It is basically same as the above <TitleComponent/>.
