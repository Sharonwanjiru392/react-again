import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Component/Navbar';
import StudentList from './Component/StudentList';
import CreateStudent from './Component/CreateStudent';
import StudentDetails from './Component/StudentDetails';
import EditStudent from './Component/EditStudent';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path="/">
            <StudentList />
          </Route>
          <Route path="/create-student">
            <CreateStudent />
          </Route>
          <Route path="/student-details/:id">
            <StudentDetails />
          </Route>
          <Route path="/edit-student/:id">
            <EditStudent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;