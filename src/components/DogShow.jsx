import propType from "prop-types";

function DogShow({ title, showDog, result }) {
  return (
    <>
      {showDog && (
        <div className="result-list">
          <h1 className="p-3">{title}</h1>
          <div className="result-item">
            <img width="30%" src={result} alt="img" />
          </div>
        </div>
      )}
    </>
  );
}
DogShow.propTypes = {
  title: propType.string.isRequired,
  showDog: propType.bool.isRequired,
  result: propType.string.isRequired,
};
export default DogShow;
