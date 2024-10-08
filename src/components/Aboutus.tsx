export default function Aboutus() {

  const texts = [
    'My own family immigrated to Canada from Colombia. Being a newcomer here instilled in me a passion for others who brave everything to find happiness in a strange land.',
    'I graduated from the University of Ottawa law school. I am very familiar with Ottawa now. I have helped guide hundreds of claimants from around the world in completing their claims.',
    'If you are looking for a tireless and compassionate advocate for your refugee claim, reach out to me! I can speak Spanish and English.',
  ];

  return(
    <div className="m-12 md:m-16">
      <h1 className="text-5xl md:text-6xl pb-8 md:pb-12"> About me </h1>
      {/* FOR SMALL SCREENS (flex col) AND LARGE SCREENS (flex row) */}
      <div className="md:hidden flex lg:flex flex-col lg:flex-row justify-between gap-4 md:gap-6 items-stretch">
        
        {/* TEXT */}
        <div className="flex-[2] flex flex-col gap-3 md:gap-4 items-stretch h-full">
          {texts.map((text) => (
            <div className="rounded-3xl bg-secondary text-secondary_content p-6 md:p-8">
              <p className="text-xl md:text-2xl">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* IMAGES */}
        <div className="flex-[2] xl:flex-[1] overflow-hidden transition-all">
          <div className="flex flex-row overflow-y-hidden overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 ">
            {/* { images.map((src) => <img src={src} alt="Image of office" className="snap-center rounded-3xl"/>) } */}
            <img src={"/portrait.jpg"} alt="self portrait" className="snap-center rounded-3xl"></img>
          </div>
        </div>
      </div>

      {/* FOR MEDIUM SIZED SCREENS */}
      <div className="md:flex hidden lg:hidden flex-row justify-between gap-4 md:gap-6 items-stretch">
        
        {/* TEXT */}
        <div className="flex-1 flex flex-col gap-3 md:gap-4 items-stretch h-full">
          
          <div className="rounded-3xl bg-secondary text-secondary_content p-6 md:p-8">
            <p className="text-xl md:text-2xl">
              {texts[0]}
            </p>
          </div>
          
          <div className="rounded-3xl bg-secondary text-secondary_content p-6 md:p-8">
            <p className="text-xl md:text-2xl">
              {texts[1]}
            </p>
          </div>

        </div>

        {/* IMAGES AND ONE TEXT BOX*/}
        <div className="flex-1 flex flex-col gap-3 md:gap-4 items-stretch h-full">

          <div className="gap-3 md:gap-4 ">
            <img src={"/portrait.jpg"} alt="self portrait" className="snap-center rounded-3xl"></img>
          </div>

          <div className="rounded-3xl bg-secondary text-secondary_content p-6 md:p-8">
            <p className="text-xl md:text-2xl">
              {texts[2]}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
