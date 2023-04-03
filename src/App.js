import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { NavigationBar } from './Components/NavigationBar';
import { Tabledisplay } from './Components/Tabledisplay';

function App() {

  return (
    <div className="App bg-dark text-dark">
      <Container>

        {/* This is navigation which consist display also*/}
        <NavigationBar />

        {/* Table display */}
        <Tabledisplay />
      </Container>
    </div>
  );
}
export default App;
