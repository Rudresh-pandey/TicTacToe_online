function Game() {
  return (
    <div className="text-center flex h-screen text-white font-montserrat">
      <div className="m-auto flex flex-col gap-4 ">
        <p className=" text-xl">
          Share this code for connecting other player{" "}
          <span className=" text-blue-700 text-2xl">#12xz6</span>{" "}
          <span className=" absolute -my-2 cursor-pointer">🔗</span>
        </p>
        <div>
          <div className=" flex justify-around font-bold">
            <p>
              Player 1 : <span className=" text-xl text-yellow-500">X</span>
            </p>
            <p>
              Player 2 : <span className=" text-xl  text-teal-500">O</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
