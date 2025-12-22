import demo from "../assets/demoBtn.svg";
import teamChat from "../assets/teamTalkBtn.svg";
import cashGive from "../assets/cashflow.svg"
import Instant from "../assets/instant.svg"
import gear from "../assets/automation.svg"
import Plug from "../assets/integration.svg"
import lock from "../assets/secure.svg"
import analytics from "../assets/visibility.svg"
import logoRepeat from "../assets/logoRepeat.svg"
import { ButtonsWithIcons } from "../components/Buttons";
import { CardsCenter, CardsEdge, CardsInstant, SolutionCard } from "../components/Cards";
import { OurImpact, TakeControl } from "../components/OurImpact";
import Footer from "../components/Footer";

const Home = () => {
 return (
  <>
   <section className="bg-hero-section h-full">
    <div className="h-max w-[85%] lg:py-50 text-white max-lg:pt-[50%] max-lg:ml-[5%] lg:ml-45 lg:w-180">
     <h2 className="font-black font-georama text-[25px] sm:text-3xl lg:text-4xl leading-normal">
      Revolutionizing Post-Booking Airline Customer Experience in Nigeria and
      Africa
     </h2>
     <span className="text-l inline-block my-6">
      Skygrit enables airlines to manage cancellations, rerouting, refunds and
      passenger alerts with full automation, delivering a seamless post-booking
      experience that protects revenue and builds customer loyalty.
     </span>

     <div className="flex gap-6 items-center">
      <ButtonsWithIcons
       bg_color="bg-[#0B897B]"
       button_text="Request a Demo"
       iconUrl={demo}
      />
      <ButtonsWithIcons
       bg_color="bg-[#17499E]"
       button_text="Talk to our Team"
       iconUrl={teamChat}
      />
     </div>
    </div>
   </section>

    <div className="w-full bg-[#F7FAFC]">
        <img src={logoRepeat} alt="image" />
    </div>

   <section className="bg-[#F7FAFC] pt-10 pb-6">
    <div className="text-center">
     <h1 className="text-2xl font-georama">The Skygrit Solution</h1>
     <span className="inline-block my-4 px-10 lg:w-200">
      Skygrit integrates seamlessly into your existing systems to resolve
      disruptions automatically, protecting revenue while delighting passengers
     </span>

     <div>
      <SolutionCard />
     </div>
    </div>
   </section>

   <section className="flex flex-col items-center justify-self-center justify-center py-16">
      <h2 className="text-2xl lg:text-3xl font-georama font-bold">Why Airlines Choose Skygrit</h2>
      
      <div className="flex flex-wrap gap-6 justify-center justify-self-center lg:gap-x-10 mt-6">
      <CardsInstant
        bg="bg-[#0B897B]"
        cardTitle= "Instant Resolutions"
        cardBody= "Get actionable Insights with reporting and analytics that track performance, compliance and passenger experience. Make data-driven decisions to continuosly improve operations."
        icon={Instant}
      />

      <CardsEdge
        bg="bg-white"
        cardTitle="Long-Term Cashflow Protection"
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
        cardBody= "Get actionable Insights with reporting and analytics that track performance, compliance and passenger experience. Make data-driven decisions to continuosly improve operations."
        icon={Plug}
      />
      <CardsEdge
        bg="bg-[#F37021]"
        cardTitle= "Real-Time Visibility"
        cardBody= "Get actionable Insights with reporting and analytics that track performance, compliance and passenger experience. Make data-driven decisions to continuosly improve operations."
        icon= {analytics}
      />

      <CardsCenter
        bg="bg-white"
        textcolor="text-black"
        cardTitle= "Instant Resolutions"
        cardBody= "Get actionable Insights with reporting and analytics that track performance, compliance and passenger experience. Make data-driven decisions to continuosly improve operations."
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

    <Footer/>
  </>
 );
};

export default Home;

