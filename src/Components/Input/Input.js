import React, { useState } from 'react'

export default function Input({value, handleInput, label, type, min, max, digitsCountAfterDecimal = 0 }) {
    function handleInputValue(e) {
        const number = e.target.value.toString().replaceAll(",", "")

        if (number === "") {
            handleInput("");
            return

        } else if ((number.slice(-1) === ".") && (!number.slice(0, -1).includes("."))) {
            if (digitsCountAfterDecimal !== 0) {
                handleInput(number);
                return
            }
            return
        } else if ((Number(number) * (10 ** digitsCountAfterDecimal)) % 1 !== 0) {
            return
        } else if (Number(min) < Number(number) && Number(number) < Number(max)) {
            handleInput(number);
            return
        }
    }

    function showPriceValue(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // return String(number);
    }


    return (
        <div className="flex flex-col font-[Sahel] ">
            <label className='flex flex-row-reverse text-[#0E1C26]  text-lg font-bold'>{label}</label>
            <div className='flex flex-row-reverse w-full
                            border-2 border-solid border-[#d4d4d8]  
                            focusfocus-within:ring-[#294861] focus-within:border-[#294861]
                            rounded-md'>
                <span className='flex flex-row-reverse items-center 
                                 text-[#0E1C26] placeholder-slate-400
                                 h-[40px]'>
                    <input
                        // value={value ? value : ""}
                        value={type === "تومان" ? showPriceValue(value) : value}
                        onChange={handleInputValue}
                        className="bg-transparent text-center align-[4px] text-md h-full font-[Sahel] focus:outline-none" />
                    <div className='min-w-[60px] h-[34px] flex justify-center items-center'>
                        {type}
                    </div>
                </span>
            </div>
        </div>
    )
}
