import './App.css';
import Form from './components/form/form';
import FormDataProvider from './fromDataContext';

function App() {
  return (
    <div className="App">
      <FormDataProvider>
      <Form/>
      </FormDataProvider>
    </div>
  );
}

export default App;
