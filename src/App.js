import './App.css';
import Category from './components/Category/Category';
import Details from './components/Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/post/Post';

function App() {
  return (
    <div className="App">
      <h2>Stages</h2>
      <Category/>
      <Details/>
    </div>
  );
}

export default App;
