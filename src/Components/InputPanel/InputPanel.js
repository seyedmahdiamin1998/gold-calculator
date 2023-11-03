import React from 'react'
import Input from "../Input/Input";
import SelectInput from '../Input/selectInput';

export default function InputPanel({
    goldPrice, handleGoldPrice,
    goldWeight, handleGoldWeight,
    ojratSakht, handleOjratSakht,
    karat, handleKarat,
    stonePrice, handleStonePrice,
    hagheVitrin, handleHagheVitrin,
    tax, handleTax,
}) {

    const karats = [24, 22, 20, 18, 17];

    return (
        <div className="flex items-center w-fit px-12 py-4 border-l-2 border-l-[#2A454B] border-solid">
            <form className="flex flex-col h-full w-full gap-4 justify-center">
                <Input label="قیمت هر گرم طلای 18 عیار" type="تومان"
                    value={goldPrice}
                    handleInput={handleGoldPrice}
                    min={0} max={1_000_000_000} />

                <Input label="وزن طلا" type="گرم"
                    value={goldWeight}
                    handleInput={handleGoldWeight}
                    min={0} max={1_000_000} digitsCountAfterDecimal={3} />

                <Input label="اجرت ساخت" type="درصد"
                    value={ojratSakht}
                    handleInput={handleOjratSakht}
                    min={-1} max={101} />

                <SelectInput label="عیار" type="عیار"
                    value={karat}
                    handleInput={handleKarat}
                    values={karats} />

                <Input label="قیمت سنگ" type="تومان"
                    value={stonePrice}
                    handleInput={handleStonePrice}
                    min={-1} max={1_000_000_000} />

                <Input label="حق ویترین" type="درصد"
                    value={hagheVitrin}
                    handleInput={handleHagheVitrin}
                    min={-1} max={101} />

                <Input label="مالیات بر ارزش افزوده" type="درصد"
                    value={tax}
                    handleInput={handleTax}
                    min={-1} max={101} />
            </form>
        </div>
    )
}
