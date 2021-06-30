import React from 'react'
import ReactDOM from 'react-dom'
// import App from "./App";

// stateless functional compoenent always return jsx

// it is also called dumb component
// bcoz it doesn't have state

// always return JSX

const Greeting = () => <h1>Hello This is my first container</h1>

// https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.14.7&externalPlugins=

// const Greeting = () {
//   return React.createElement('h1', {}, 'hello world')
// }

//compoent name should be start with capity letter

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createContext('h1', {}, 'helllo world')
//   )
// }

/* 
JSX RULE

1. Always return a single element
2. div  / section / article or Fragment<></>
3. use camel case for html attrtibute like onClick etc.,
4. classname instead of class
5. close every element
formatting
*/

ReactDOM.render(<Greeting />, document.getElementById('root'))
