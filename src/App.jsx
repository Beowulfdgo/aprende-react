import './App.css';

function App() {
  return (
   <article className='tw-followCard'>
    <header className='tw-followCard-header'>
    <img 
    className='tw-followCard-avatar'
    alt="el avatar de kikobeats" 
    src="https://unavatar.io/x/kikobeats" />
    <div className='tw-followCard-info'>
      <strong>Kiko Beats</strong>
      <span className='tw-followCard-infoUserName'>@kikobeats        
      </span>
       </div>
    </header>
    <aside>
      <button className='tw-followCard-button'>Seguir</button>
    </aside>
  </article>
);
}

export default App;
