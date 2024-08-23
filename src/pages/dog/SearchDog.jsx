

import "./SearchDog.css"

export default function SearchDog() {

    return (

        <div className = "page-container">
        <div className = "page-child">
            <h1>Get Random Dogs</h1>
            <div>
                <input type = "number" placeholder = "No. of Dogs" />
            </div>
            <div>
                <button>Search</button>
            </div>
            <h1>Search Result (1) </h1>
            <div className = "result-list">
                <div className = "result-item">
                    <img src = "" alt = "img" />

                </div>

            </div>
        </div>
        </div>



    )
}

