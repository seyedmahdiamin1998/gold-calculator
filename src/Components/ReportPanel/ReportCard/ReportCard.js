import React, { useState } from 'react'

export default function ReportCard({title, description, number}) {

    return (
        <div className='flex flex-col 
                        border-2 border-dashed border-[#d4d4d8]
                        p-4 rounded-md hover:border-[#294861]'>
            <div className="flex flex-row-reverse justify-between items-center">
                <div className='text-[#0E1C26] text-lg font-bold'>{title}</div>
                <span className='flex flex-row text-[#0E1C26] text-lg font-bold'>
                    <p>تومان</p>
                    <p className='pl-2'>{number}</p>
                </span>
            </div>
            <div className='flex justify-end pt-2'>
                <p className=''>
                    {description}
                </p>
            </div>
        </div>
    )
}
