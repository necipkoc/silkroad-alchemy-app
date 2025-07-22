import { Diamond } from "lucide-react";

import items from "./lib/items.json";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-black flex items-center justify-center">
      <div className="rounded-lg shadow-2xl w-128 border-2 border-[#969383]">
        <div className="bg-[#0d0d0d] px-4 py-2 rounded-t-md flex justify-center items-center border-b-2 border-[#969383]">
          <h2 className="text-white font-bold text-sm">Alchemy</h2>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#302d2c] via-[#232126] to-[#2b292a]">
          <div className="border-4 border-[#6c6554] mb-8">
            <div className="grid grid-cols-[42px_1fr] gap-3 p-3">
              <div>
                <img src="/items/staff.jpg" alt="" className="w-full" />
              </div>
              <div>
                <p className="text-[#a8a887] text-sm leading-relaxed">
                  Able to upgrade Equipment with Alchemy Stone, Attribute Stone
                  or Elixir.
                </p>
                <p className="text-[#a8a887] text-sm leading-relaxed">
                  Place Equipment and other alchemy requirements.
                </p>
                <p className="text-[#a8a887] text-sm leading-relaxed">
                  (Items of the 12th grade and higher can only be reinforced
                  with an Enhancer.)
                </p>
              </div>
            </div>
          </div>

          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="border-4 border-[#6c6554] mb-8 last:mb-0"
              >
                <div className="grid grid-cols-[42px_1fr] gap-3 p-3">
                  <div>
                    <img src={item.image} alt="" className="w-full" />
                  </div>
                  <div>
                    <p className="text-[#a8a887] text-sm leading-relaxed">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="elixir flex justify-center items-center gap-8 mb-8">
            <div className="border-3 border-[#403e3e] bg-[#0a0a07] w-12 h-12"></div>
            <div className="border-3 border-[#403e3e] bg-[#11110a] w-12 h-12 flex justify-center items-center">
              <Diamond color="#232322" fill="#232322" />
            </div>
            <div className="border-3 border-[#403e3e] bg-[#11110a] w-12 h-12 flex justify-center items-center">
              <Diamond color="#232322" fill="#232322" />
            </div>
            <div className="border-3 border-[#403e3e] bg-[#11110a] w-12 h-12 flex justify-center items-center">
              <Diamond color="#232322" fill="#232322" />
            </div>
          </div>

          <div className="progress">
            <div className="bg-black py-2.5 border-2 border-[#403e3e] rounded-md"></div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              className="bg-[#636363] text-white text-sm py-1 px-4 rounded-md cursor-pointer"
              disabled
            >
              Strengthen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
