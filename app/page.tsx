import ScrollExpand from './ScrollExpand';

export default function Home() {
  return (
    <div className="">
      
      <div className="relative min-h-screen w-full  inset-0">
        <div className="relative z-10">
          <ScrollExpand
            src="/hero2.jpg"
            alt="Product hero"
            title="Protecting Wildlife"
            scrollHint="Scroll inside the frame"
            useWindowScroll
          > 
            <h2 className="relative bottom-20  text-[#016630] font-extrabold text-8xl">Protecting Nature  </h2>
            <h2 className="relative bottom-20 text-white/90 font-extrabold text-8xl">is Our Duty</h2>
            <h2 className="text-2xl font-extrabold  bottom-15 relative ">We Help Preserve Endangered Species And Their <span className="text-[#fb2c36]">Habitats</span></h2>
           <a href="/catalog"> <button  className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-[#016630] sm:w-fit border-2 border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-primary-800">Explore The Catalog</button>
         </a> </ScrollExpand>
        </div>
      </div>
    </div>
  );
}
