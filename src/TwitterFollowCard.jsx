export function TwitterFollowCard ({children,userName,isFollowing}) {
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
         <img 
         className='tw-followCard-avatar'
         alt="el avatar de kikobeats" 
         src= {`https://unavatar.io/x/${userName}`} />
         <div className='tw-followCard-info'>
          <strong>  {children} </strong>
           <span 
            className='tw-followCard-infoUserName'>@{userName}        
           </span>
         
           </div>
        </header>
        <aside>
          <button className='tw-followCard-button'>Seguir</button>
        </aside>
      </article>
    )
}