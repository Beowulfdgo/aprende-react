import { Fragment } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  const format =(userName) => `@${userName}`
  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={format} isFollowing={true} userName="kikobeats" name="Kikobeats" />
      <TwitterFollowCard  formatUserName={format} isFollowing={false}  userName="midudev" name="Miguel D" />
      <TwitterFollowCard formatUserName={format} isFollowing userName="midudev" name="Miguel D" />
      <TwitterFollowCard  formatUserName={format  } userName="vxnder" name="Vander Hart" />
    </section>
  );
}

export default App;
