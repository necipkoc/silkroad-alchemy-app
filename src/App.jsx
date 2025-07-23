import { Diamond } from "lucide-react";
import { useState } from "react";

import items from "./lib/items.json";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedElixir, setSelectedElixir] = useState(null);
  const [itemHover, setItemHover] = useState(false);
  const [weaponLevel, setWeaponLevel] = useState(0);
  const [isStrengthening, setIsStrengthening] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStrengthen = () => {
    if (!selectedItem || !selectedElixir || isStrengthening) return;
    setIsStrengthening(true);
    setProgress(0);
    const duration = 1500;
    const interval = 30;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      setProgress(Math.min((elapsed / duration) * 100, 100));
      if (elapsed >= duration) {
        clearInterval(timer);
        setIsStrengthening(false);
        setWeaponLevel((prev) => prev + 1);
        setProgress(0);
      }
    }, interval);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-black flex items-center justify-center gap-8">
      <div className="rounded-lg shadow-2xl w-128 border-2 border-[#969383]">
        <div className="bg-[#0d0d0d] px-4 py-2 rounded-t-md flex justify-center items-center border-b-2 border-[#969383]">
          <h2 className="text-white font-bold text-sm">Alchemy</h2>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#302d2c] via-[#232126] to-[#2b292a]">
          <div className="border-4 border-[#6c6554] mb-8">
            <div className="grid grid-cols-[42px_1fr] gap-3 p-3">
              <div>
                <div
                  className={`w-10 h-10 bg-[#0a0a07] border-2 border-[#403e3e] flex items-center justify-center relative ${
                    isStrengthening ? "animate-glow" : ""
                  }`}
                  onMouseEnter={() => setItemHover(true)}
                  onMouseLeave={() => setItemHover(false)}
                >
                  {selectedItem && (
                    <>
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className={`w-full h-full object-contain ${
                          isStrengthening ? "animate-glow-img" : ""
                        }`}
                      />
                      <span
                        className={`absolute -top-2 -right-2 text-xs font-bold px-1.5 py-0.5 rounded shadow border border-yellow-700 bg-yellow-400 text-black ${
                          isStrengthening ? "animate-glow-badge" : ""
                        }`}
                      >
                        +{weaponLevel}
                      </span>
                      {itemHover && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 min-w-[210px] bg-[#00174e]/50 text-white rounded-lg shadow-lg p-3 z-10 text-xs backdrop-blur-sm border border-blue-200">
                          <div className="font-bold text-base mb-1">
                            {selectedItem.name}{" "}
                            {weaponLevel > 0 ? `(+${weaponLevel})` : ""}
                          </div>
                          <div className="mb-0.5">
                            Category:
                            <span className="font-semibold">
                              {selectedItem.category}
                            </span>
                          </div>
                          <div>
                            Race:
                            <span className="font-semibold">
                              {selectedItem.race}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
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

          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="border-3 border-[#403e3e] bg-[#0a0a07] w-12 h-12">
              <img src={`${selectedElixir}`} alt="" className="w-12" />
            </div>
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

          <div className="progress overflow-hidden">
            <div className="bg-black py-1 border-2 border-[#403e3e] rounded-md overflow-hidden">
              <div
                className="h-4 bg-yellow-600 transition-all duration-200"
                style={{
                  width: `${progress}%`,
                  transition: isStrengthening ? "width 0.03s linear" : "none",
                }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              className={`text-white text-sm py-1 px-4 rounded-md cursor-pointer transition-colors duration-200 
                ${
                  selectedItem && selectedElixir && !isStrengthening
                    ? "bg-[#9b7700] hover:bg-[#735906] shadow-yellow-800 shadow-md text-black"
                    : "bg-[#636363] opacity-60 cursor-not-allowed"
                }
              `}
              disabled={!(selectedItem && selectedElixir) || isStrengthening}
              onClick={handleStrengthen}
            >
              Strengthen
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-2xl w-128 border-2 border-[#969383]">
        <div className="bg-[#0d0d0d] px-4 py-2 rounded-t-md flex justify-center items-center border-b-2 border-[#969383]">
          <h2 className="text-white font-bold text-sm">Inventory</h2>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#302d2c] via-[#232126] to-[#2b292a]">
          <div className="border-4 border-[#6c6554] mb-8 py-2 px-4">
            <h4 className="text-sm text-[#efffc5] font-bold mb-4">Weapons</h4>
            <div className="flex gap-2 items-center">
              {items.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.name}
                  className={`cursor-pointer border-2 h-12 w-12 ${
                    selectedItem && selectedItem.id === item.id
                      ? "border-yellow-400"
                      : "border-transparent"
                  } rounded`}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
          </div>
          <div className="border-4 border-[#6c6554] mb-8 p-4">
            <img
              src="/alchemy/elixir.jpg"
              alt=""
              className={`cursor-pointer border-2 h-12 w-12 ${
                selectedElixir ? "border-yellow-400" : "border-transparent"
              } rounded`}
              onClick={() => setSelectedElixir("/alchemy/elixir.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
