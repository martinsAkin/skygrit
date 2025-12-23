import skygrit from "../assets/SkygritSymbol.svg"
import left from "../assets/left.png"
import right from "../assets/right.svg"
import earlyAccess from "../assets/earlyAccess.svg"
import phone from "../assets/teamTalkPhone.svg"
import { ButtonsWithIcons } from "./Buttons"

export const OurImpact = () => {
 const impact = [
  {
   figure: "80%",
   body: "Of cancellations resolved without human touch"
  },
  {
   figure: "30%",
   body: "Reduction in refund payouts through smart rebooking"
  },
  {
   figure: "Minutes",
   body: "Not weeks for instant resolutions"
  },
  {
   figure: "+25pts",
   body: "Higher CSAT and NPS uplift scores"
  },
 ]
  return (
    <>
      <div className="bg-[#F4FFFB] w-full">
        
        <div className="grid gap-30 grid-cols-1 lg:grid-cols-2 items-center justify-self-center justify-center text-center max-lg:flex max-lg:flex-col-reverse max-lg:pt-6 max-lg:gap-0">
         <img src={skygrit} alt="image" className="h-100"/>
         <section className="w-100 p-2">
          <h2 className="text-3xl font-black mb-4 font-georama">Our Impact</h2>
          <h2 className="text-xl font-bold w-85 mx-auto font-georama">Airlines using Skygrit achieve measurable results within the first 90 days</h2>
          <ol className="grid grid-cols-1 lg:grid-cols-2 text-center gap-4 w-85 mt-6 max-lg:grid-cols-2 mx-auto">
            {impact.map((details, index) => (
              <div key={index}>
                <h1 className="text-orange-600 text-2xl font-black font-georama">{details.figure}</h1>
                <span className="inline-block mt-2 text-[13px]">{details.body}</span>
              </div>
            ))}
          </ol>
         
         </section>
        </div>

      </div>
    </>
  )
}




export const TakeControl = () => {
  return (
    <>
     <div className="w-full relative bg-gradient-to-b from-[#0A2540] to-[#051829] h-100 lg:h-80 ">
      <img 
       src={left} 
       alt="image" 
       className="absolute left-0 h-80 max-md:hidden"
      />
      <img 
       src={right} 
       alt="image" 
       className="absolute right-0 h-80 max-md:hidden"
      />

      <section className="text-center flex flex-col justify-center items-center justify-self-center text-white gap-4 w-90 lg:w-130 py-10 h-full">
        <h1 className="text-xl lg:text-2xl font-georama font-black">Take Control of Airline Disruptions</h1>
        <span className="text-[14px] w-90 lg:w-100">Be one of the first airlines to deliver automated, compliant, and passenger-friendly disruption management.</span>

        <div className="flex items-center justify-center gap-4 flex-wrap">
         <ButtonsWithIcons 
          bg_color="bg-[#0B897B]"
          iconUrl={earlyAccess} 
          button_text="Request Early Access"
         />
        <ButtonsWithIcons 
         bg_color="bg-[#17499E]"
         iconUrl={phone} 
         button_text="Talk to Our Team"
        />
        </div>

        <span className="text-[12px] max-md:text-[10px] italic font-light">Join leading airlines transforming post-booking experience</span>
      </section>

     </div>
    </>
  )
}
