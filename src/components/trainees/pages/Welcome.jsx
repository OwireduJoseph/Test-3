import {useNavigate, useOutletContext, useParams} from "react-router-dom";
// import {Root} from '../../utils/types.ts'


const Welcome = () => {

    // function DaysLeft(startDate:number, durationInSeconds:number):number {
    //     const SECONDS_IN_A_DAY = 86400;
    //     const start = new Date(startDate);
    //     const end:number | Date = new Date(start.getTime() + durationInSeconds * 1000);
    //     const now:number = new Date();
    //     const timeLeft = end as unknown as number - now;
    //     const daysLeft = Math.ceil(timeLeft / (1000 * SECONDS_IN_A_DAY));
    //     return daysLeft > 0 ? daysLeft : 0; // Return 0 if the date has passed
    // }
        //@ts-ignore
  const {data} =  useOutletContext()

        return (
          <>
             <div>
                <div className="h-full p-3 px-10 font-poppins">
                  <div className="flex flex-col gap-y-0">
                    <h1 className="mb-0 text-4xl leading-[72px] font-semibold">
                      Welcome
                    </h1>
                    <h3 className="mt-0">lll</h3>
                  </div>

                  <h3 className="leading-[24px] my-5">
                    Safety training briefing tailored to your needs by your
                    administrator.
                  </h3>

                  <section className="grid grid-cols-12 gap-x-10">
                    <div className="col-span-6">
                      <p className="text-lg font-bold leading-[27px]">
                        A training has been set up for you by
                      </p>
                      <p className="text-sm leading-[21px]">
                        Your administrator
                      </p>
                      <div className="w-full p-5 mt-5 space-y-5 bg-white border rounded-lg border-1 border-[#e5e5e5]">
                        <div className="text-sm font-light m">
                          <p className="font-bold">Name</p>
                          <p className="text-xs text-primary-gray">
                           
                          </p>
                        </div>
                        <div className="text-sm font-light m">
                          <p className="font-bold">Email</p>
                          <p className="text-xs text-primary-gray">
                        
                          </p>
                        </div>
                        <div className="text-sm font-light m">
                          <p className="font-bold">Company</p>
                          <p className="text-xs text-primary-gray">
                        
                          </p>
                        </div>
                        <div className="text-sm font-light m">
                          <p className="font-bold">Position</p>
                          <p className="text-xs text-primary-gray">
                           
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6">
                      <p className="text-lg font-bold leading-[27px] mb-10">
                        Training details
                      </p>
                      <div className="w-full p-5 mt-5 space-y-5 bg-white border rounded-lg border-1 border-[#e5e5e5]">
                        <div className="text-sm font-light m">
                          <p className="font-bold">Title</p>
                          <p className="text-xs text-primary-gray">
                           
                          </p>
                          {/*<p className="text-xs text-primary-gray">14th July, 20224</p>*/}
                        </div>
                        <div className="text-sm font-light m">
                          <p className="font-bold">Date Created</p>
                          <p className="text-xs text-primary-gray">
                        
                          </p>
                          {/*<p className="text-xs text-primary-gray">14th July, 20224</p>*/}
                        </div>
                        <div className="text-sm font-light m">
                          <p className="font-bold">Duration</p>
                          <p className="text-xs text-primary-gray">
                           
                          </p>
                          {/*<p className="text-xs text-primary-gray">1,600hrs</p>*/}
                        </div>

                        <div className="text-sm font-light m">
                          <p className="font-bold">Status</p>
                          <p className="text-xs font-bold text-primary-red">
                          
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mt-5">
                    <p className="text-lg font-bold leading-[27px]">
                      Your Training Areas
                    </p>

                    <div className="w-full p-5 mt-5 bg-white border rounded-lg border-1 border-[#e5e5e5] grid grid-cols-12 gap-y-5">
                      {Object.entries(data).map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center col-span-5 gap-x-10"
                        >
                          <p className="flex items-center justify-center p-3 text-lg font-bold text-white rounded-full size-10 bg-primary-red">
                            {category[1].length}
                          </p>
                          <p>{category[0]}</p>
                        </div>
                      ))}
                      {/* <div className="flex items-center col-span-5 gap-x-10">
                  <p className="flex items-center justify-center p-3 text-lg font-bold text-white rounded-full size-10 bg-primary-red">
                    20
                  </p>
                  <p>Fire Safety & Drills</p>
                </div>
                <div className="flex items-center col-span-5 gap-x-10">
                  <p className="flex items-center justify-center p-3 text-lg font-bold text-white rounded-full size-10 bg-primary-blue">
                    4
                  </p>
                  <p>Medical Emergency</p>
                </div>
                <div className="flex items-center col-span-5 gap-x-10">
                  <p className="flex items-center justify-center p-3 text-lg font-bold text-white rounded-full size-10 bg-primary-gray">
                    40
                  </p>
                  <p>Mental Health Training</p>
                </div>
                <div className="flex items-center col-span-5 gap-x-10">
                  <p className="flex items-center justify-center p-3 text-lg font-bold text-white rounded-full size-10 bg-primary-blue">
                    2
                  </p>
                  <p>Law & Police</p>
                </div>
                <div className="flex items-center col-span-5 gap-x-10">
                  <p className="flex items-center justify-center p-3 text-lg font-bold text-white rounded-full size-10 bg-primary-red">
                    2
                  </p>
                  <p>Security Awareness</p>
                </div>
                <div className="flex items-center col-span-5 gap-x-10">
                  <p className="flex items-center justify-center p-3 text-lg font-bold text-white rounded-full size-10 bg-primary-gray">
                    2
                  </p>
                  <p>Cybersecurity Basics</p>
                </div> */}
                    </div>
                  </section>

                  <section className="w-full p-5 mt-5 bg-white border rounded-lg border-1 border-[#e5e5e5] space-y-5 leading-[27px]">
                    <p>
                      You can save and continue the training anytime, <br /> you
                      however have{" "}
                      <span className="font-bold text-primary-green">
                        {" "}
                       12 days
                      </span>{" "}
                      to complete training.
                    </p>
                    <p className="font-bold text-primary-green">
                      Be Prepared, Always
                    </p>
                  </section>

                  <div className="flex items-center justify-between p-4 mt-10">
                    <div className="invisible space-x-2">
                      <button className="px-4 py-2 text-white bg-black rounded-md">
                        Previous
                      </button>
                      <button className="px-4 py-2 text-black bg-gray-300 rounded-md">
                        Save & Continue later
                      </button>
                    </div>

                  
                  </div>
                </div>
              </div>
          </>
        );
    }



export default Welcome