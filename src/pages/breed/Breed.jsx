

import "./Breed.css"

export default function Breed() {

    return (

        <div className = "page-container">
        <div className = "page-child">
            <h1>Get Breed</h1>
            <div>
                <input type = "text" placeholder = "Name" />
            </div>
            <div>
                <button>Search</button>
            </div>
            <h1>Breed Found ... </h1>
            <div className = "result-list">
                <div className = "result-item">
                    <img src = "" alt = "img" />

                </div>

            </div>
        </div>
        </div>



    )
}

