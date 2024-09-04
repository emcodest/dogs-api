import "./SearchDog.css";
import { useState } from "react";
import axios from "axios";
import DogShow from "../../components/DogShow";

export default function SearchDog() {
  const [showDog, setShowDog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("https://i.gifer.com/YCZH.gif");
  const GetRand = async () => {
    //todo:
    // - show loading
    setLoading(true);
    setShowDog(true);
    setResult("https://i.gifer.com/YCZH.gif");
    // - call the api
    try {
      const mres = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log("# my result: ", mres.data.message);
      setResult(mres.data.message);
    } catch (ex) {
      console.log("## error ", ex);
    }

    //await new Promise((r) => setTimeout(r, 5000))

    // - get the result
    // - hide loading

    setLoading(false);
    // render the result
  };

  return (
    <div className="page-container">
      <div className="page-child p-3">
        <h1>Get Random Dogs</h1>
        {/* <div className = "p-2">
                <input className = "form-control" type = "number" placeholder = "No. of Dogs" />
            </div> */}
        <div className="p-2">
          <button onClick={GetRand} className="btn btn-primary w-50">
            {loading && <div className="spinner-border text-info"></div>}
            {!loading && <span>Get Random Dogs</span>}
          </button>
        </div>

        <DogShow showDog={showDog} title="Result ..." result={result} />

        {/* {showDog && (
          <div className="result-list">
            <h1 className="p-3">Result ... </h1>
            <div className="result-item">
              <img width="30%" src={result} alt="img" />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
