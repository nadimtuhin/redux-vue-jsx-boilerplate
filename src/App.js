import Hello from './components/Hello';
import logo from './assets/logo.png';
import './App.css';

export default {
  name: 'app',
  render(h) {
    return (
      <div id="app">
        <img src={logo} />
        <Hello />
      </div>
    );
  }
}
