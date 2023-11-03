import React, { useState } from 'react'

export default function SelectInput({ value, handleInput, label, type, values }) {

    return (
        <div className="flex flex-col font-[Sahel] ">
            <label className='flex flex-row-reverse text-[#0E1C26]  text-lg font-bold'>{label}</label>
            <div className='flex flex-row-reverse 
                            border-2 border-solid border-[#d4d4d8]  
                            focusfocus-within:ring-[#294861] focus-within:border-[#294861]
                            rounded-md'>
                <span className='flex flex-row-reverse items-center 
                                 text-[#0E1C26] placeholder-slate-400
                                 h-[40px]'>
                    <select id="countries"
                        value={value}
                        onChange={e => { handleInput(e.target.value) }}
                        className="bg-transparent w-[190px] text-center align-[4px] text-md h-full font-[Sahel] focus:outline-none">
                        {values.map((x) => { return <option className="w-full h-full bg-zinc-100" value={x} key={x}>{x}</option> })}
                    </select>
                    <div className='bg-transparent min-w-[60px] h-[34px] flex justify-center items-center'>
                        {type}
                    </div>
                </span>
            </div>
        </div>
    )
}
