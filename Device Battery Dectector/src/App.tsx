import { useBattery  } from "react-use";

function App(): JSX.Element {
  // Calling useBattery hook
  const battery = useBattery();

  // Destructuring battery properties
  const { isSupported, level, charging, dischargingTime, chargingTime } =
    battery;

  //Check if browser support Battery API
  if (!isSupported) {
    return (
      <div className="text-center mt-8">
        <strong className="text-lg">Battery sensor</strong>:{" "}
        <span className="text-gray-600">Not supported</span>
      </div>
    );
  }

  return (
    <div className="text-center mt-8">
      {/* Display Battery Charge Percentage */}
      <strong className="text-lg">Charge level</strong>:{" "}
      <span className="text-blue-500 font-bold">
        {(level * 100).toFixed(0)}%
      </span>{" "}
      <br />
      {/* Display Whether Device is charging or not */}
      <strong className="text-lg">Charging</strong>:{" "}
      <span className="text-blue-500 font-bold">
        {charging ? "Yes" : "No"}
      </span>{" "}
      <br />
      {/* Display Device Charging time */}
      <strong className="text-lg">Charging time</strong>:{" "}
      <span className="text-blue-500 font-bold">
        {chargingTime ? chargingTime : "Finished"}
      </span>{" "}
      <br />
      {/* Display Device Discharging time */}
      <strong className="text-lg">Discharging time</strong>:{" "}
      <span className="text-blue-500 font-bold">{dischargingTime}</span>
    </div>
  );
}

export default App;