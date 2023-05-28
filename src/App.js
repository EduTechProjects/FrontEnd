import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Home />

        </a>
        <div class="tenor-gif-embed" data-postid="23229777" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/sound-gif-23229777">Sound GIF</a>from <a href="https://tenor.com/search/sound-gifs">Sound GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        <iframe src="https://giphy.com/embed/aw6CWyyLQ8WyRuktxR" width="480" height="160" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rainhouse-rainhouseco-sound-file-wav-aw6CWyyLQ8WyRuktxR">via GIPHY</a></p>
      </header>
    </div>
  );
}

export default App;
