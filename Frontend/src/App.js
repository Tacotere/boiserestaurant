import Navbar from "./components/navbar";
import RestaurantList from "./components/restaurantList";
import Home from "./components/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import RestaurantPage from "./components/restaurantPage";
import EditPage from "./components/editPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/card/:id">
            <RestaurantPage />
          </Route>
          <Route exact path="/edit/:id">
            <EditPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
