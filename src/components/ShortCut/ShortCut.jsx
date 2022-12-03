import React from "react";
import { shorcutItems } from "../../Data/shortCut";
import ShorCutCard from "./ShorCutCard";
import { Animate, AnimateGroup } from "react-simple-animate";

const ShortCut = () => {
  return (
    <div className='flex space-x-10'>
      <AnimateGroup play>
        {shorcutItems?.map((item, index) => (
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={index}
          >
            <ShorCutCard
              imgUrl={item.imgUrl}
              title={item.title}
              navigator={item.navigator}
            />
          </Animate>
        ))}
      </AnimateGroup>
    </div>
  );
};

export default ShortCut;
