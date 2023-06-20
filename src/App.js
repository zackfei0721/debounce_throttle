import logo from './logo.svg';
import './App.css';
import DebounceBtn from './debounce';
import ThrottleBtn from './throttle';

function App() {
  return (
    <div className="App">
      <h1>Debounce and Throttle</h1>
      <DebounceBtn />
      <ThrottleBtn />
    </div>
  );
}

export default App;
