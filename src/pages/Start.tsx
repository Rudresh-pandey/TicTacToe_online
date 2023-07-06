function Start() {
  return (
    <div>
      <div className=" text-center flex h-screen text-white font-montserrat">
        <div className=" m-auto flex flex-col ">
          <p className="font-bold" style={{ fontSize: "3rem" }}>
            TicTacToe
          </p>
          <p>online multiplayer</p>
          <div className=" flex gap-6 justify-center my-6 ">
            <div className="flex items-center bg-stone-600 cursor-pointer">
              <i className="fa fa-star-o text-lg text-yellow-500 font-semibold bg-stone-900 px-2  "></i>
              <p className="px-2">Star</p>
            </div>
            <div className="flex items-center bg-stone-600 cursor-pointer">
              <i className="fa fa-code-fork text-lg text-teal-500 font-semibold bg-stone-900 px-2 "></i>
              <p className="px-2">Fork</p>
            </div>
          </div>
          <div className=" flex flex-col gap-4 my-6">
            <input
              type="text"
              placeholder="Enter Code"
              className=" text-white px-2 py-1 text-lg font-semibold bg-inputcolor "
            />
            <button className=" bg-red-400 px-6 py-1 font-semibold text-lg">
              Enter Game
            </button>
            <p>
              <span className=" text-teal-500 font-bold text-lg">O</span>
              <span className=" text-yellow-500 font-bold text-lg">R</span>
            </p>
            <button className=" bg-red-400 px-6 py-1 font-semibold text-lg">
              Create Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;