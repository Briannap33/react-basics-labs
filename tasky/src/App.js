import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <h1> Tasky </h1>
      <Task title="Dishes" deadline="Today">
        Clean dishes and dry </Task>
      <Task title="Laundry" deadline="Tomorrow">
      Fold laundry and put away</Task>
      <Task title="Tidy" deadline="Today">
        Clean house</Task>
    </div>
  );
}

export default App;
