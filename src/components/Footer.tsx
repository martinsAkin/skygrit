const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#0A2540]">
        <div className="max-lg:w-full max-lg:pl-10 max-md:p-6 lg:w-250 flex flex-col max-lg:items-start justify-self-center justify-between">
            <section className="flex max-lg:flex-col justify-between py-8 max-md:items-start max-md:gap-6 text-white">
              <ol className="flex flex-col gap-4 list-none font-georama">
                <h1 className="text-[#0B897B] font-semibold text-[20px] mb-2">Company</h1>
                <li>About Skygrit</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Press & Media</li>
              </ol>
              <ol className="flex flex-col gap-4 list-none font-georama">
                <h1 className="text-[#0B897B] font-semibold text-[20px] mb-2">Product</h1>
                <li>Features</li>
                <li>Integration</li>
                <li>Security</li>
                <li>Pricing</li>
              </ol>
              <ol className="flex flex-col gap-4 list-none font-georama">
                <h1 className="text-[#0B897B] font-semibold text-[20px] mb-2">Resources</h1>
                <li>Documentation</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Support</li>
              </ol>

              <ol className="flex flex-col gap-4 list-none font-georama">
                <h1 className="text-[#0B897B] font-semibold text-[20px] mb-2">Contact</h1>
                <li>Lagos, Nigeria</li>
                <li>contact@skygrit.com</li>
                <li>+234 XXX XXX XXX</li>            
              </ol>
              
            </section>
            <hr className="border-white border-0.5"/>
            <span className="text-[12px] my-6 text-white text-center">2025 Skygrit. All rights reserved. | Privacy Policy | Terms of Service</span>
        </div>
      </div>
    </>
  )
}

export default Footer