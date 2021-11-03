import './App.css';
import Counter from './Components/Counter';
import store from './Store/Store';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <Counter />
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
