import { Fragment } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const kikobeats={isFollowing:true ,userName:"kikobeats"}
const  midudev={ isFollowing:false,  userName:"midudev" }
function App() {
  return (
    <section className='App'>
      <TwitterFollowCard {...kikobeats}  > 
       <h1>kiko Beats</h1> </TwitterFollowCard>  
      <TwitterFollowCard {...midudev}  >
       <h1>Miguel D esta es una prueba</h1>  </TwitterFollowCard> 
    </section>
  );
}

export default App;
