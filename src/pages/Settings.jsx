import { useState } from "react";

export default function Settings({ setBusinessName, setCurrency }) {
  const [name, setName] = useState("");
  const [currencyUnit, setCurrencyUnit] = useState("Naira");

  function handleSubmit(e) {
    e.preventDefault();

    setBusinessName(name);
    setCurrency(currencyUnit);
  }
  return (
    <div className="mx-5">
      <h3>Settings</h3>

      <form
        className="mt-5 flex flex-col gap-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col">
          <label>Business name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Business Manager Dashboard"
            className="border-blue-400 border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label>Currency</label>
          <select
            value={currencyUnit}
            onChange={(e) => setCurrencyUnit(e.target.value)}
            className="border-blue-400 border p-2"
          >
            <option value={"Naira"}>Naira</option>
            <option value={"Dollar"}>Dollar</option>
            <option value={"Euro"}>Euro</option>
          </select>
        </div>

        <div>
          <button className="border border-green-500 p-2 cursor-pointer hover:bg-green-300">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
