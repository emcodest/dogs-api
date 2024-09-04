import "./Breed.css";
import DogShow from "../../components/DogShow";
import axios from "axios";
import { useState } from "react";
export default function Breed() {
  const [showDog, setShowDog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [result, setResult] = useState("https://i.gifer.com/YCZH.gif");
  function SetNameState(ev) {
    console.log(ev.target.value);
    setName(ev.target.value.toLowerCase());
  }
  const GetRandBreed = async () => {
    //todo:
    // - show loading
    setLoading(true);
    setShowDog(true);
    setResult("https://i.gifer.com/YCZH.gif");
    // - call the api
    try {
      // this is get req
      const mres = await axios.get(
        `https://dog.ceo/api/breed/${name}/images/random`
      );
      //   const mres = await axios.post(
      //     `https://jsonplaceholder.typicode.com/posts`, {
      //         title: name,
      //         body: 'bar',
      //         userId: 1,

      //     }
      //   );
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
      <div className="page-child">
        <h1>Get Breed</h1>
        <div>
          <input
            onChange={SetNameState}
            className="form-control"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="p-2">
          <button onClick={GetRandBreed} className="btn btn-primary w-50">
            Get Random Breed
          </button>
        </div>
        <DogShow showDog={showDog} title="Breed Result ..." result={result} />
      </div>
    </div>
  );
}
