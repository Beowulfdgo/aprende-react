export function TwitterFollowCard ({formatUserName,children,userName,isFollowing}) {
  const text = isFollowing ? 'Siguiendo' :'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
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
            className='tw-followCard-infoUserName'>{formatUserName(userName)}         
           </span>
           </div>
        </header>
        <aside>
          <button className={buttonClassName}>{text}</button>
        </aside>
      </article>
    )
}