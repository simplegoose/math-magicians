import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import CalculatorPage from './routes/Calculator';
import Home from './routes/Home';
import Quote from './routes/Quote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/quote" element={<Quote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
