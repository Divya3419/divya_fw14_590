import logo from './logo.svg';
import './App.css';
import MainRoutes from './Pages/MainRoutes';
import {Container} from "@chakra-ui/react"

function App() {
  return (
    <Container maxWidth="6xl">
      <MainRoutes/>
    </Container>
  );
}

export default App;
