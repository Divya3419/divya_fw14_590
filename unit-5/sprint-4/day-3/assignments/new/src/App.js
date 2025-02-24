import logo from './logo.svg';
import './App.css';
import { Container} from '@chakra-ui/react';
import Form from './component/Form';
import Boxes from './component/Boxes';

function App() {
  return (
    <>
    <Container maxWidth="xl">
     <Form/>

     
    </Container>
    <Container border="2px solid black"  maxWidth="xxl">
    <Boxes/>
    </Container>
    </>
   
  );
}

export default App;
