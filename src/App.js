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
              <Route path="/clock-2">
                <Clock2Page />
              </Route>
              <Route path="/clock-1">
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
