import demo from "../assets/demoBtn.svg";
import cashGive from "../assets/cashflow.svg"
import Instant from "../assets/instant.svg"
import gear from "../assets/automation.svg"
import Plug from "../assets/integration.svg"
import lock from "../assets/secure.svg"
import analytics from "../assets/visibility.svg"
import phone from "../assets/teamTalkPhone.svg"
// import logoRepeat from "../assets/logoRepeat.svg"
import { ButtonsWithIcons } from "../components/Buttons";
import { CardsCenter, CardsEdge, CardsInstant, SolutionCard } from "../components/Cards";
import { OurImpact, TakeControl } from "../components/OurImpact";
// import Footer from "../components/Footer";

const Home = () => {
 return (
  <>
   <section className="bg-hero-section h-full">
    <div className="h-max w-[85%] lg:py-50 text-white max-lg:pt-[50%] max-lg:ml-[5%] lg:ml-45 lg:w-180 flip-orientation">
     <h2 className="font-black font-georama text-[25px] sm:text-2xl md:text-3xl lg:text-4xl leading-normal">
      Revolutionizing Post-Booking Airline Customer Experience in Nigeria and
      Africa
     </h2>
     <span className="text-l inline-block my-6">
      Skygrit enables airlines to manage cancellations, rerouting, refunds and
      passenger alerts with full automation, delivering a seamless post-booking
      experience that protects revenue and builds customer loyalty.
     </span>

     <div className="flex max-md:flex-col gap-6 items-center">
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

   <section className="bg-[#F7FAFC] pt-10 pb-6">
    <div className="text-center">
     <h1 className="text-3xl font-inter font-bold">The Skygrit Solution</h1>
     <span className="inline-block my-4 px-10 lg:w-200 text-[#5A6C7D]">
      Skygrit integrates seamlessly into your existing systems to resolve
      disruptions automatically, protecting revenue while delighting passengers
     </span>

     <div className="flex justify-self-center">
      <SolutionCard />
     </div>
    </div>
   </section>

   <section className="flex flex-col items-center justify-self-center justify-center py-16 w-full">
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
        cardBody= "Handle cancellations, re-routing, and refunds in minutes, not weeks. Automated workflows eliminate delays and provide passengers with immediate options, dramatically improving satisfaction during stressful disruptions."
        icon={Instant}
      />

      <CardsEdge
        bg="bg-white"
        cardTitle="Cashflow Protection"
        cardBody="Gradually reduce refund payouts and keep more cash in the business. Smart rebooking incentives and automated alternatives reduce refund requests by up to 30%, protecting working capital."
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

    <section>
      <OurImpact />
    </section>
    <section>
      <TakeControl />
    </section>

    {/* <Footer/> */}
  </>
 );
};

export default Home;

