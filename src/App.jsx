import { Fragment } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  return (
    <section>
      <TwitterFollowCard  userName="kikobeats" name="Kikobeats" />
      <TwitterFollowCard userName="midudev" name="Miguel D" />
      <TwitterFollowCard userName="vxnder" name="Vander Hart" />
    </section>
  );
}

export default App;
