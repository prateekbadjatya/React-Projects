import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
// import App from "./App";

// stateless functional compoenent always return jsx

// it is also called dumb component
// bcoz it doesn't have state

// always return JSX

// const Greeting = () => <h1>Hello This is my first container</h1>

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

/* 
Nested component 
*/
/* 
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}
 */
/* const Person = () => <h2>Prateek</h2>

const Message = () => <p>Hello Prateek</p> */

/* 

ReactDOM.render(<Greeting />, document.getElementById('root'))
 */

const src =
  'https://images-eu.ssl-images-amazon.com/images/I/81BdZ3PbmjL._AC_UL200_SR200,200_.jpg'

const author = 'Prateek'

const title = 'My Big Book of Creative Crayons'
function BookList() {
  return (
    <section className='booklist'>
      <Book seller='Amazon' price='32$' />
      <Book seller='Amazon' price='32$' />
      {/* <Book />
      <Book />
      <Book />
      <Book /> */}
    </section>
  )
}

const Book = props => {
  console.log('props value', props)
  return (
    <article className='book'>
      {/* <Image /> <Title /> <Author /> */}
      <img src={src} alt='' />

      <h1>{title}</h1>
      <h4
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
      >
        {author.toUpperCase()}
      </h4>
      <p
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
      >
        {props.price}
      </p>
    </article>
  )
}

/* const Image = () => {
  let src =
    'https://images-eu.ssl-images-amazon.com/images/I/81BdZ3PbmjL._AC_UL200_SR200,200_.jpg'
  return <img src={src} alt='' />
} */

/* const Title = () => <h1>My Big Book of Creative Crayons</h1> */

/* const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    {'Prateek'.toUpperCase()}
  </h4>
) */

ReactDOM.render(<BookList />, document.getElementById('root'))
