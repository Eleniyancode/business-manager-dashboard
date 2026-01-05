export default function Products() {
  return (
    <>
      <div className="mx-5 flex justify-between items-center">
        <h3 className="">List of Products</h3>
        <button className="border-2 px-3 py-1 border-blue-300 cursor-pointer ">
          Add New product
        </button>
      </div>

      <ul className="mx-5 my-5 flex flex-col gap-5">
        <li className="flex justify-between">
          <div className="flex gap-8">
            <p>Earphone</p>
            <p>N20</p>
          </div>
          <div className="flex gap-5 item-center">
            <button className="border-2 px-3 py-1 border-blue-300 cursor-pointer">
              Edit
            </button>
            <button className="border-2 px-3 py-1 border-red-300 cursor-pointer">
              Delete
            </button>
          </div>
        </li>

        <li className="flex justify-between">
          <div className="flex gap-8">
            <p>Airpods</p>
            <p>N10</p>
          </div>
          <div className="flex gap-5 item-center">
            <button className="border-2 px-3 py-1 border-blue-300 cursor-pointer">
              Edit
            </button>
            <button className="border-2 px-3 py-1 border-red-300 cursor-pointer">
              Delete
            </button>
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex gap-8">
            <p>Speaker</p>
            <p>N30</p>
          </div>
          <div className="flex gap-5 item-center">
            <button className="border-2 px-3 py-1 border-blue-300 cursor-pointer">
              Edit
            </button>
            <button className="border-2 px-3 py-1 border-red-300 cursor-pointer">
              Delete
            </button>
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex gap-8">
            <p>Bluetooth</p>
            <p>N15</p>
          </div>
          <div className="flex gap-5 item-center">
            <button className="border-2 px-3 py-1 border-blue-300 cursor-pointer">
              Edit
            </button>
            <button className="border-2 px-3 py-1 border-red-300 cursor-pointer">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
