/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function TwitterFollowCard({ userName, name, isFollowing, children }) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-avatar'
                     src={`https://unavatar.io/${userName}`} alt="Avatar de panda" />
                <div className='tw-followCard-info'>
                    <strong > {children}</strong>
                    <span className='tw-followCard-infoUserName'> @{userName} </span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}