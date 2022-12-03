import React from "react";
import { Animate, AnimateGroup } from "react-simple-animate";

const Banner = () => {
  return (
    <div className='w-full'>
      <div className='flex bg-[#ffefc0]' style={{ height: "600px" }}>
        <div className='flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2'>
          <div className='hover:scale-105'>
            <AnimateGroup play>
              <Animate
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                sequenceIndex={0}
              >
                <h2 className='text-3xl font-semibold text-gray-800 md:text-4xl'>
                  Welcome to the{" "}
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                  >
                    <span className='text-indigo-600'>
                      Eco-anxiety Youth Forum!
                    </span>
                  </Animate>
                </h2>
              </Animate>
              <Animate
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                sequenceIndex={3}
              >
                <p className='mt-2 text-sm text-gray-500 md:text-base'>
                  Where everyone can either create their post/ concern regarding
                  healthcare, climate action, and climate resilience or
                  participate in commenting, advising, and sharing on others’
                  posts to create an open discussion and engage communities.
                </p>
              </Animate>
            </AnimateGroup>
          </div>
        </div>
        <div
          className='hidden lg:block lg:w-1/2'
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <img
            src='https://img.freepik.com/free-vector/group-therapy-illustration_74855-5516.jpg?w=2000'
            alt=''
            className='h-full object-cover hover:scale-105'
          />
          <div className='h-full bg-black opacity-25'></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
