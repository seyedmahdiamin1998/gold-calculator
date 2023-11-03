import React from 'react'
import ReportCard from './ReportCard/ReportCard'


export default function ReportPanel({ goldPriceReport, OjratSakhtReport,
    hagheVitrinReport, taxReport, 
    goldPriceFinal, hagheVitrinPercent, taxPercent}) {
    function showPriceValue(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // return String(number);
    }
    return (
        <div className="flex flex-col justify-center w-full px-12 py-8 font-[Sahel] gap-2">
            <ReportCard title={":قیمت نهایی محصول"}
                description={"قیمت طلا + اجرت ساخت + سود + مالیات + ملحقات"}
                number={showPriceValue(goldPriceFinal)} />

            <ReportCard title={":قیمت طلای محصول"}
                description={"وزن ✕ نرخ روز طلا"}
                number={showPriceValue(goldPriceReport)} />

            <ReportCard title={":اجرت ساخت"}
                description={"قیمت طلا ✕ درصد اجرت"}
                number={showPriceValue(OjratSakhtReport)} />

            <ReportCard title={":حق ویترین"}
                description={`(قیمت طلا + اجرت ساخت) ✕ ${hagheVitrinPercent}%`}
                number={showPriceValue(hagheVitrinReport)} />

            <ReportCard title={":مالیات"}
                description={`(حق ویترین + اجرت ساخت) ✕ ${taxPercent}%`}
                number={showPriceValue(taxReport)} />

        </div>
    )
}
