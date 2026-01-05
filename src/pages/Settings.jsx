export default function Settings() {
  return (
    <div className="mx-5">
      <h3>Settings</h3>

      <form className="mt-5 flex flex-col gap-5">
        <div className="flex flex-col">
          <label>Business name:</label>
          <input
            type="text"
            placeholder="Business Manager Dashboard"
            className="border-blue-400 border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label>Currency</label>
          <select className="border-blue-400 border p-2">
            <option>Naira</option>
            <option>Dollar</option>
            <option>Euro</option>
          </select>
        </div>
      </form>
    </div>
  );
}
