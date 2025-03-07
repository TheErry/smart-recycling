import './App.css';
import RecyclingClassifier from './components/RecyclingClassifier';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Smart Recycling Image Classification</h1>
        <p>Please upload an image to identify and classify materials</p>
        <RecyclingClassifier />
      </header>
    </div>
  );
}

export default App;
