function Game() {
  const Game = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <div className="text-center flex h-screen text-white font-montserrat">
      <div className="m-auto flex flex-col">
        <p className=" text-xl">
          Share this code for connecting other player{" "}
          <span className=" text-blue-700 text-2xl">#12xz6</span>{" "}
          <span className=" absolute -my-2 cursor-pointer">🔗</span>
        </p>
        <div className=" flex flex-col gap-4" style={{ padding: " 24px 15%" }}>
          <div className=" flex justify-between font-bold my-8">
            <p>
              Player 1 : <span className=" text-xl text-teal-500">X</span>
            </p>
            <p>
              Player 2 : <span className=" text-xl text-yellow-500">O</span>
            </p>
          </div>
          <div className=" flex flex-col gap-8">
            <div className=" flex justify-between">
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
            </div>
            <div className=" flex justify-between">
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
            </div>
            <div className=" flex justify-between">
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
