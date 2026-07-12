import demo from "../assets/demoBtn.svg";
import cashGive from "../assets/cashflow.svg"
import Instant from "../assets/instant.svg"
import gear from "../assets/automation.svg"
import Plug from "../assets/integration.svg"
import lock from "../assets/secure.svg"
import analytics from "../assets/visibility.svg"
import phone from "../assets/teamTalkPhone.svg"
import { ButtonsWithIcons } from "../components/Buttons";
import { CardsCenter, CardsEdge, CardsInstant, SolutionCard } from "../components/Cards";
import { OurImpact, TakeControl } from "../components/OurImpact";
import hero1 from "../assets/herobg1.jpg"
import hero2 from "../assets/herobg2.jpg"
import hero3 from "../assets/herobg3.jpg"
import hero4 from "../assets/herobg4.jpg"
import hero5 from "../assets/herobg5.jpg"
import heroMain from "../assets/herobackground.svg"
import HeroBackgroundSlider from "../components/HeroBackgroundSlider";


const Home = () => {

  const heroSlides = [heroMain, hero1, hero2, hero3, hero4, hero5];
  
 return (
  <div className="overflow-hidden">
   <section className="bg-hero-section h-full" id="home">
    <div className="h-max w-[85%] lg:py-40 text-white max-lg:pt-[30%] max-lg:ml-[5%] lg:ml-30 lg:w-250 flip-orientation lg:mt-20">
      <HeroBackgroundSlider images={heroSlides} intervalMs={5000} />

     <h2 className="font-black font-georama text-[18px] md:text-3xl lg:text-6xl leading-normal lg:leading-20">
      Airline Infrastructure for Revenue Protection, Operational Recovery, and Passenger Continuity
     </h2>
     <span className="text-[14px] lg:text-l inline-block my-2">
      Skygrit is a global airline infrastructure platform helping airlines reduce disruption related revenue leakage, operational inefficiencies, customer support pressure, and passenger churn.
     </span>
     <span className="text-[14px] lg:text-l inline-block my-2">
      Flight disruptions remain one of the airline industry&#39;s largest operational and financial leakages globally. Delayed recovery processes, fragmented systems, manual workflows, and poor passenger coordination often lead to increased operational costs, refund backlog, regulatory exposure, passenger dissatisfaction, revenue loss, and declining customer loyalty.
     </span>

     <div className="flex max-md:flex-col gap-3 items-start max-md:pt-4 lg:pt-6 max-sm:flex-row mt-8">
     <a href="mailto:partnerships@juneinfra.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        <ButtonsWithIcons
         bg_color="bg-[#0B897B]"
         button_text="Request a Demo"
         iconUrl={demo}
        />
      </a>
      <a href="https://wa.me/+2347050247379" target="_blank" rel="noopener noreferrer">
        <ButtonsWithIcons
        bg_color="bg-[#17499E]"
        button_text="Talk to our Team"
        iconUrl={phone}
        />
      </a>
     </div>
    </div>
   </section>

   <section className="bg-[#F7FAFC] pt-10 pb-6" id="solutions">
    <div className="text-center">
     <h1 className="text-3xl font-inter font-bold">The Skygrit Solution</h1>
     <span className="inline-block my-4 max-md:px-4 px-10 lg:w-200 text-[#5A6C7D]">
      Skygrit helps airlines modernize disruption management through centralized operational visibility, workflow orchestration, automation, and structured passenger recovery pathways.
     </span>

     <div className="flex justify-self-center">
      <SolutionCard />
     </div>
    </div>
   </section>

   <section className="flex flex-col items-center justify-self-center justify-center py-16 w-full" id="benefits">
      <h2 className="text-2xl lg:text-3xl font-georama font-bold">Why Airlines Choose Skygrit</h2>
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"> */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        mt-6
        items-center
        justify-center
        md:justify-items-stretch
      ">


      <CardsInstant
        bg="bg-[#0B897B]"
        cardTitle= "Instant Resolutions"
        cardBody= "Enables faster resolution of service disruptions, reducing delays and improving passenger experience through structured and coordinated post-booking operations."
        icon={Instant}
      />

      <CardsEdge
        bg="bg-white"
        cardTitle="Cashflow Protection"
        cardBody="Helps airlines retain up to 30% more revenue during disruptions by reducing cash leakage and enabling shared revenue opportunities across post-booking operations."
        textcolor="text-black"
        icon={cashGive}
      />
      <CardsEdge
          bg="bg-[#1B1C1B]"
          cardTitle= "Automation Control"
          cardBody= "Set rules, alerts, and workflows that match your policies. Complete flexibility to define business logic, approval thresholds, and customer commuication templates that aligns with your brand."
          icon={gear}
      />
      <CardsCenter
        bg="bg-[#17499E]"
        cardTitle= "Seamless Integration"
        cardBody= "Connects with Passenger Service Systems, Flight Information Systems, and more. RESTful APIs and pre-built connectors ensure rapid deployment with minimal IT overhead."
        icon={Plug}
      />
      <CardsEdge
        bg="bg-[#F37021]"
        cardTitle= "Real-Time Visibility"
        cardBody= "Get actionable insights with reporting and analytics that track performance, compliance and passenger experience. Make data-driven decisions to continuously improve operations."
        icon= {analytics}
      />

      <CardsCenter
        bg="bg-white"
        textcolor="text-black"
        cardTitle= "Secure & Compliant"
        cardBody= "Enterprise-grade security with full audit trails, SOC 2 compliant infrastructure with encrypted data transmission, role-based access control, and comprehensive compliance documentation."
        icon={lock}
      />
      </div>

    </section>

    <section id="impacts">
      <OurImpact />
    </section>
    <section>
      <TakeControl />
    </section>

    {/* <Footer/> */}
  </div>
 );
};

export default Home;

