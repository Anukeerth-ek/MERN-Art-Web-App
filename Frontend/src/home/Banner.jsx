import { bannerSection } from "../utils/Data";
import React from "react";

const Banner = () => {
     return (
          <section>
               <div>
                    <div className="flex flex-wrap items-center flex-col px-4 lg:px-0">
                         <h1 className="text-lg lg:text-3xl my-2 lg:my-[20px] font-normal">Small shop make every moment special!</h1>
                         <div>
                              <ul className="flex flex-wrap justify-center text-center mt-[20px] gap-14 mb-2">
                                   {bannerSection.map((item, index) => (
                                        <>
                                             <li
                                                  key={index}
                                                  className={`text-semibold text-xl ${item.wordBreak ? "break-words" : ""}`}
                                             >
                                                  <img src={item.image} className="rounded-[60%] object-cover h-[110px] w-[110px]" />
                                                  {item.title.split(".").map((sentence, index, array) => (
                                                       <React.Fragment key={index}>
                                                            {sentence}
                                                            {index < array.length - 1 ? "." : null}
                                                            {index < array.length - 1 && item.wordBreak ? <br /> : null}
                                                       </React.Fragment>
                                                  ))}
                                             </li>
                                        </>
                                   ))}
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Banner;
