import './App.css';
import HomePage from './home/HomePage';
import EnquiryPage from './enquiry/EnquiryPage';
import ContactPage from './contact/ContactPage'
import NavBarComp from './components/navbar/NavBarComp'
import ExplorePage from './explore/ExplorePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBarComp />
      <div className="App">
        <Route path="/" component = {HomePage} exact/>
        <Route path="/enquiry" component = {EnquiryPage} exact/>
        <Route path="/contactus" component = {ContactPage} exact/>
        <Route path="/explore" component = {ExplorePage} exact/>
      </div>
    </Router>
  );
}

export default App;
