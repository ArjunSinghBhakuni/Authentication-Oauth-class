import logo from './logo.svg';
import './App.css';
import MainRoute from './pages/MainRoute';
import {Container} from '@chakra-ui/react'

function App() {
  return (
     <Container minWidth={"6xl"}>
<MainRoute/>
     </Container>
  );
}

export default App;
