import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../translates/i18n'
// import Cookie from 'js-cookie'
import '../assets/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// const lazyImport = (
//   filename
// ) => (
//   lazy(() => (
//      import(`${filename}`)
//   ))
// )

// const NewTest = lazyImport('./NewTest/NewTest')


const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Switch>
            <Route exact path='/' render={()=>(<div>Home Page</div>)}/>
          </Switch>
        </Router>
      </I18nextProvider>
    </>
  )
}

// const App = () => {
//   return (
//     <>
//       <I18nextProvider i18n={i18n}>
//         <Router>
//           <Suspense fallback={<div>Loading...</div>}>
//           <Switch>
//             <Route exact path='/' render={()=>{<div>Home Page</div>}}/>
//           </Switch>
//           </Suspense>
//         </Router>
//       </I18nextProvider>
//     </>
//   )
// }

export default App
