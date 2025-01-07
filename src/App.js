import "./styles.css";

const SNOW_NUMBER = 300;

export default function App() {
  const arr = new Array(SNOW_NUMBER).fill(null);

  console.log(arr);

  return (
    <div className="App">
      <div className="snow-container">
        {arr.map((v) => (
          <div
            className="snow"
            style={{
              left: `${Math.random() * 100}%`,
              "animation-duration": `${Math.random() * 10 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
