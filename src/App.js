import { useState } from "react";
import InputPanel from "./Components/InputPanel/InputPanel";
import ReportPanel from "./Components/ReportPanel/ReportPanel";

function App() {
  const [goldPriceGeram, setGoldPriceGeram] = useState("");
  const [goldWeight, setGoldWeight] = useState("");
  const [ojratSakhtPercent, setOjratSakhtPercent] = useState("");
  const [karat, setKarat] = useState(18);
  const [stonePrice, setStonePrice] = useState("");
  const [hagheVitrinPercent, setHagheVitrinPercent] = useState("7");
  const [taxPercent, setTaxPercent] = useState("9");


  // ------------------------------------------------------------------------------------------------------------------------
  function goldPriceCalculation(goldWeight, goldPriceGeram) {
    return Math.round(goldWeight * goldPriceGeram);
  };

  function OjratSakhtCalculation(goldWeight, goldPriceGeram, ojratSakhtPercent) {
    const goldPrice = goldWeight * goldPriceGeram;
    const result = Math.round(goldPrice * (Number(ojratSakhtPercent) * 0.01));
    return result
  };

  function hagheVitrinCalculation(goldWeight, goldPriceGeram, ojratSakhtPercent, hagheVitrinPercent) {
    const goldPrice = goldWeight * goldPriceGeram;
    const ojratSakht = goldPrice * (Number(ojratSakhtPercent) * 0.01);
    const result = Math.round((goldPrice + ojratSakht) * (hagheVitrinPercent * 0.01));
    return result
  };

  function taxCalculation(goldWeight, goldPriceGeram, ojratSakhtPercent, hagheVitrinPercent, taxPercent) {
    const goldPrice = goldWeight * goldPriceGeram;
    const ojratSakht = goldPrice * (Number(ojratSakhtPercent) * 0.01);
    const hagheVitrin = (goldPrice + ojratSakht) * (hagheVitrinPercent * 0.01);
    const result = Math.round((hagheVitrin + ojratSakht) * (taxPercent * 0.01))
    return result
  };

  function goldPriceFinal(goldWeight, goldPriceGeram, ojratSakhtPercent, hagheVitrinPercent, taxPercent, stonePrice) {
    const goldPrice = goldWeight * goldPriceGeram;
    const ojratSakht = goldPrice * (Number(ojratSakhtPercent) * 0.01);
    const hagheVitrin = (goldPrice + ojratSakht) * (hagheVitrinPercent * 0.01);
    const tax = (hagheVitrin + ojratSakht) * (taxPercent * 0.01);
    const result = Math.round(goldPrice + ojratSakht + hagheVitrin + tax + Number(stonePrice));
    return result;
  };


  return (
    <div className="flex justify-center items-center w-screen min-h-screen 
                    bg-gradient-to-r from-[#0E1C26] via-[#2A454B] to-[#294861]">
      <div className="flex bg-zinc-100 w-[72rem] min-h-4/5 rounded-xl shadow-md shadow-zinc-100/10">
        {/* left panel */}
        <ReportPanel
          goldPriceReport={goldPriceCalculation(goldWeight, goldPriceGeram)}
          OjratSakhtReport={OjratSakhtCalculation(goldWeight, goldPriceGeram, ojratSakhtPercent)}
          hagheVitrinReport={hagheVitrinCalculation(goldWeight, goldPriceGeram, ojratSakhtPercent, hagheVitrinPercent)}
          taxReport={taxCalculation(goldWeight, goldPriceGeram, ojratSakhtPercent, hagheVitrinPercent, taxPercent)}
          goldPriceFinal={goldPriceFinal(goldWeight, goldPriceGeram, ojratSakhtPercent, hagheVitrinPercent, taxPercent, stonePrice)}
          hagheVitrinPercent={hagheVitrinPercent}
          taxPercent={taxPercent}

        />

        {/* right panel */}
        <InputPanel
          goldPrice={goldPriceGeram} handleGoldPrice={setGoldPriceGeram}
          goldWeight={goldWeight} handleGoldWeight={setGoldWeight}
          ojratSakht={ojratSakhtPercent} handleOjratSakht={setOjratSakhtPercent}
          karat={karat} handleKarat={setKarat}
          stonePrice={stonePrice} handleStonePrice={setStonePrice}
          hagheVitrin={hagheVitrinPercent} handleHagheVitrin={setHagheVitrinPercent}
          tax={taxPercent} handleTax={setTaxPercent}
        />
      </div>
    </div>
  );
}

export default App;
