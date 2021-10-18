import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Menu from "./components/shared/Menu"
import HomePage from "./pages/HomePage"
import BirthdayPage from "./pages/BirthdayPage"
import BootstrapClassicPage from "./pages/BootstrapClassicPage"
import Header from "./components/shared/Header"
import BootstrapReactPage from "./pages/BootstrapReactPage"
import Clock1Page from "./pages/Clock1Page"
import Clock2Page from "./pages/Clock2Page"
import Countries from "./components/countries/Countries"
import ChangeTitle from "./components/useEffect/ChangeTitle"
import UserCards from "./components/userCards/UserCards"
import RandomImages from "./components/randomImages/RandomImages"
import Props from "./components/props/Props"
import Profile from "./components/profile/Profile"
import Jsx from "./components/jsx/Jsx"
import Counter from "./components/counter/Counter"
import Hello from "./components/hello/Hello"
import Comp from "./components/comp/Comp"
import Form1 from "./components/forms/Form1"
import Form2 from "./components/forms/Form2"
import Form3 from "./components/forms/Form3"
import Form4 from "./components/forms/Form4"
import Shop from "./components/shop/Shop"
import ToDoApp from "./components/todoapp/ToDoApp"
import Clock3 from "./components/clock3/Clock3"
import Posts from "./components/posts/Posts"
import Odev from "./components/odev/Odev"
import State from "./components/state/State"
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Switch>
              <Route path="/state">
                <State />
              </Route>
              <Route path="/progress">
                <Odev />
              </Route>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route path="/todoapp">
                <ToDoApp />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/form4">
                <Form4 />
              </Route>
              <Route path="/form3">
                <Form3 />
              </Route>
              <Route path="/form2">
                <Form2 />
              </Route>
              <Route path="/form1">
                <Form1 />
              </Route>
              <Route path="/comp">
                <Comp />
              </Route>
              <Route path="/hello">
                <Hello />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/jsx">
                <Jsx />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/props">
                <Props />
              </Route>
              <Route path="/random-images">
                <RandomImages />
              </Route>
              <Route path="/usercards">
                <UserCards />
              </Route>
              <Route path="/useeffect">
                <ChangeTitle />
              </Route>
              <Route path="/countries">
                <Countries />
              </Route>
              <Route path="/clock3">
                <Clock3 />
              </Route>
              <Route path="/clock2">
                <Clock2Page />
              </Route>
              <Route path="/clock1">
                <Clock1Page />
              </Route>
              <Route path="/bs-react">
                <BootstrapReactPage />
              </Route>
              <Route path="/bs-classic">
                <BootstrapClassicPage />
              </Route>
              <Route path="/birthday">
                <BirthdayPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}
export default App
