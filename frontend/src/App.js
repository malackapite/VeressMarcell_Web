import logo from './logo.svg';
import './App.css';
import { AxiosProvider } from './AxiosContext';
import Oldal from './Oldal';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
   <AxiosProvider>
   <Oldal></Oldal>
   </AxiosProvider>
  );
}

export default App;
