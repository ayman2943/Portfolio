import React from 'react';
function Header() {
    return ( <header>
 
        <div id="brand-name" onClick={()=>{window.location.reload()}}>All<span>NBA</span>stat </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>teams</li>
            <li>players</li>
            <li>fixtures</li>
          </ul>
        </nav>
       </header> );
}

export default Header;

