import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes';


function App() {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Link to="/"></Link>
                <Link to="/blogs">Blogs</Link>
                <Switch>
                    {routes.map((route) => {
                        // console.log(route.component)
                        return <Router key={route.path} exact path= {route.path} component={route.component}/>
                    })}
                </Switch>
            </div>
        </Router>
    );
}

export default App;

