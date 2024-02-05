import { useState } from "react";
import { cn } from "./utils/cn";

function App() {
  const [height, setHeight] = useState(500);

  setTimeout(() => {
    setHeight(height - 5);
    if (height < 0) {
      setHeight(500);
    }
  }, 300);

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-[#251c27]">
        <div className="">
          <div
            className={cn(
              "w-[200px] bg-yellow-200 flex justify-center rounded-lg h-0 transition-all duration-500 fixed bottom-0 left-[45%]"
            )}
            style={{ height: height } as React.CSSProperties}
          >
            <div className="match absolute -top-[100px]"></div>
            <div className="absolute -top-[48px] w-3 h-12 bg-black"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
