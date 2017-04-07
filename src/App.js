import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, withRouter } from 'react-router-dom'

import Articles from './Articles'

const Header = () => (
  <h1 className="text-center">
    <Link to="/">Favorite Articles</Link>
  </h1>
)

const Nav = () => (
  <ul className="nav nav-pills">
    <li><NavLink exact to="/articles">Articles</NavLink></li>
    <li><NavLink exact to="/articles/favorite">Favorite Articles</NavLink></li>
  </ul>
)

const Footer = () => (
  <footer className="text-center">Favorite Articles</footer>
)

const Routes = withRouter(({history}) => (
  <div className="container">
    <Header onClick={() => history.push("/")} />
    <Nav />
    <Switch>
      <Route exact path="/" component={Articles.List}/>
      <Route exact path="/articles" component={Articles.List}/>
      <Route exact path="/articles/favorite" component={Articles.FavoriteList}/>
      <Route exact path="/articles/:id" component={Articles.Show}/>
    </Switch>
    <Footer />
  </div>
))

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default App
