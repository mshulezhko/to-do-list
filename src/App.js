import ToDoForm from './components/ToDoForm'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <>
      <div className="App">
        <ToDoForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
