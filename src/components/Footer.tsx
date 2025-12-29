import logo from "../assets/logo.svg"
import email from "../assets/email.svg"
import proceed from "../assets/Arrow.svg"
import X from "../assets/x.svg"
import Instagram from "../assets/insta.svg"
import LinkedIn from "../assets/linkedIn.svg"

const Footer = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-lg:w-full max-lg:pl-10 p-6 lg:w-250 flex max-lg:flex-col max-lg:gap-10 max-lg:items-center justify-self-center justify-between">
            <img src={logo} alt="image" className="h-10"/>

            <ol className="list-none flex gap-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ol>

            <div className="flex items-start gap-4 flex-col">
              <h1 className="text-2xl text-[#17499E]">Subscribe to our Newsletter</h1>
              <div className="flex items-center border-b border-b-gray-500 shadow-md p-1.5 gap-3">
                <img src={email} alt="icon" />
                <input 
                  type="text" 
                  placeholder="Type your e-mail"
                  className="p-2 w-45 lg:w-55"
                />
                <img src={proceed} alt="icon" />
              </div>
              <nav className="flex gap-0 items-center">
                <a href= "https://x.com/Juneinfra" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <img src={X} alt="icon" />
                </a>
                <a href="https://instagram.com/june.infra/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <img src={Instagram} alt="icon" />
                </a>
                <a href="https://www.linkedin.com/company/june.infra/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <img src={LinkedIn} alt="icon" />
                </a>
              </nav>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer