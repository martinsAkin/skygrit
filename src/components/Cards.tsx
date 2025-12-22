import automation from "../assets/management.svg";
import time from "../assets/comply.svg";
import graph from "../assets/cost.svg";
import star from "../assets/brand.svg";


export const SolutionCard = () => {
 const cardData = [
  {
   logo: automation,
   title: "Automate Disruption Management",
   body:
    "Detect cancellations in real time and instantly offer passengers rebooking, re- routing, or refund options through intelligent automation.",
  },
  {
   logo: time,
   title: "Comply Effortlessly",
   body:
    "Built-in post-booking compliance engine with zero manual tracking. Stay compliant with NCAA, IATA, and regional regulations automatically.",
  },
  {
   logo: graph,
   title: "Reduce Cost",
   body:
    "Cut manual interventions, shrink call center volume, and free your operations team to focus on high-value tasks and strategic initiatives.",
  },
  {
   logo: star,
   title: "Protect Your Brand",
   body:
    "Passengers experience fast, consistent resolutions that build trust, improve satisfaction scores, and drive long-term loyalty.",
  },
 ];

 return (
  <>
   <div className="flex flex-wrap gap-6 justify-center justify-self-center">
    {cardData.map((details, index) => (
     <div
      key={index}
      className="bg-white p-6 text-left rounded-lg w-75 lg:w-60 h-65"
     >
      <img src={details.logo} alt="icon" className="w-12.5" />
      <p className="font-bold mt-4 font-georama">{details.title}</p>
      <span className="inline-block text-[12px] my-4 w-55 lg:w-50">{details.body}</span>
     </div>
    ))}
   </div>
  </>
 );
};

interface WhyCardsProps{
    bg: string;
    cardTitle: string,
    cardBody: string,
    textcolor?: string
    icon: string,
}
export const CardsEdge = ({bg, cardTitle, cardBody, textcolor="text-white", icon}:WhyCardsProps) => {
  return(
    <>
      <div className={`relative ${bg} rounded-2xl border border-gray-200 max-md:w-90 lg:w-120 h-145 lg:h-120 overflow-hidden max-lg:w-90`}>
          <div className={`px-6 pt-6 ${textcolor}`}>
            <h1 className={`font-black text-2xl ${textcolor} mb-4 font-georama`}>{cardTitle}</h1>
            <span className="inline-block text-[15px] leading-tight">{cardBody}</span>
          </div>
          <img 
            src={icon} 
            alt="icon"
            className="mt-15 h-75 absolute -bottom-4 -left-2.5"
          />
      </div>
    </>
  )
}

export const CardsInstant = ({bg, cardTitle, cardBody, textcolor="text-white", icon}:WhyCardsProps) => {
  return(
    <>
      <div className={`relative ${bg} rounded-2xl border border-gray-200 max-md:w-90 lg:w-120 h-145 lg:h-120 overflow-hidden max-lg:w-90`}>
          <div className={`px-6 pt-6 ${textcolor}`}>
            <h1 className={`font-black text-2xl ${textcolor} mb-4 font-georama`}>{cardTitle}</h1>
            <span className="inline-block text-[15px] leading-tight">{cardBody}</span>
          </div>
          <img 
            src={icon} 
            alt="icon"
            className="mt-15 h-100 absolute -bottom-25 -left-2.5"
          />
      </div>
    </>
  )
}

export const CardsCenter = ({bg, cardTitle, cardBody, textcolor="text-white", icon}:WhyCardsProps) => {
  return(
    <>
      <div className={`relative ${bg} rounded-2xl border border-gray-200 max-md:w-90 lg:w-120 h-145 lg:h-120 overflow-hidden max-lg:w-90`}>
          <div className={`px-6 pt-6 ${textcolor}`}>
            <h1 className={`font-black text-2xl ${textcolor} mb-4 font-georama`}>{cardTitle}</h1>
            <span className="inline-block text-[15px] leading-tight">{cardBody}</span>
          </div>
          <img 
            src={icon} 
            alt="icon"
            className="mt-15 h-80 absolute -bottom-4 -right-1"
          />
      </div>
    </>
  )
}
