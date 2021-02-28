import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Movie from './components/Movie';

function App() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/Movie' component={Movie} />
        </Router>
    )
}

export default App;