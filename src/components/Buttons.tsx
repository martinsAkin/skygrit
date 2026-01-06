interface ButtonProps {
 bg_color: string;
 button_text: string;
 iconUrl: string;
}

export const ButtonsWithIcons = ({
 bg_color,
 button_text,
 iconUrl,
}: ButtonProps) => {
 return (
  <>
   <div className={`${bg_color} px-2.5 lg:px-8 py-4 w-55 rounded-md lg:w-60 transition-all duration-100 hover:-translate-y-1 hover:shadow-lg active:scale-95`}>
    <div className="flex items-center gap-2 justify-center">
     <img src={iconUrl} alt="icon" />
     <span className="text-[10px] lg:text-[12px]">{button_text}</span>
    </div>
   </div>
  </>
 );
};
