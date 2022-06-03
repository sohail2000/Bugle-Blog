import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          {/* //Home */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* //Create */}
          <Route path="/create">
            <Create />
          </Route>
          {/* //BlogDetails */}
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          {/* //error 404 page */}
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
