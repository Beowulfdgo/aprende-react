import { Fragment } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  return (
    <section className='App'>
      <TwitterFollowCard  isFollowing={true} userName="kikobeats" > 
        kiko Beats</TwitterFollowCard>  
      <TwitterFollowCard   isFollowing={false}  userName="midudev" >
        Miguel D esta es una prueba </TwitterFollowCard> 
    </section>
  );
}

export default App;
