

import "./Header.css"

export default function Header() {

    return (

       <div className = "app-header">
        <div className = "header-logo">
             <h1>Logo</h1>
        </div>
        <div className = "header-menu">
             <ul>
                 <li>
                     <a href = "/"> Dog</a>
                 </li>
                 <li>
                     <a href = "/breed">Breed</a>
                 </li>
             </ul>
        </div>
       </div>
        



    )
}

