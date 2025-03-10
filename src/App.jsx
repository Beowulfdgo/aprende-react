import { Fragment } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  return (
    <section className='App'>
      <TwitterFollowCard  isFollowing={true} userName="kikobeats" > 
       <h1>kiko Beats</h1> </TwitterFollowCard>  
      <TwitterFollowCard   isFollowing={false}  userName="midudev" >
       <h1>Miguel D esta es una prueba</h1>  </TwitterFollowCard> 
    </section>
  );
}

export default App;
