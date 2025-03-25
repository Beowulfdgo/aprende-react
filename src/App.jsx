import { Fragment } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const formatUserName = (userName) => `@${userName}`
const kikobeats={isFollowing:true ,userName:"kikobeats"}
const  midudev={ isFollowing:false,  userName:"midudev" }
function App() {
  return (
    <section className='App'>
      <TwitterFollowCard {...kikobeats} formatUserName={formatUserName} > 
       <h1>kiko Beats</h1> </TwitterFollowCard>  
      <TwitterFollowCard {...midudev} formatUserName={formatUserName} >
       <h1>Miguel D esta es una prueba</h1>  </TwitterFollowCard> 
    </section>
  );
}

export default App;
