import React from "react";

const Post = () => {
  return (
    <div className='flex p-5 justify-around items-start'>
      <img
        src='https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4'
        className='rounded-3xl'
        width={600}
        height={600}
      />
      <div className='flex  flex-col justify-center items-start px-5'>
        <span className='font-bold py-5 px-10 mx-5 bg-[#eeebe3] rounded-lg text-3xl  w-2/3 '>
          What is the biggest Legal Barrier to Online Bidding in the New Normal?
        </span>
        <span className='font-bold italic text-left p-5'>
          What is the biggest Legal Barrier to Online Bidding in the New Normal?
        </span>
        <span className='text-justify px-5 text-clip overflow-hidden w-2/3 h-48 indent-20 '>
          Every day, there is a cascade of headlines about black market
          marketing, unlawful lobbying, or attempting to limit bids through
          technical criteria in a tender invitation. This “method” is illegal
          under tender regulations, and everybody in the sector is aware of it.
          Contrary to popular belief, many people attempt to exploit flaws in
          circulars to pervert these regulations by forging dossiers, stamps,
          and other documents so that they can remove rivals and grab their
          opportunity to win the tender regardless of the consequences that may
          result in a deficit in the national budget. As a result, additional
          necessary social investments do not have a sufficient allotted budget
          to carry out. The government operates as transparently as possible for
          these prohibited actions to pay the penalty and legal punishment.
          Ironically, in my opinion, the consequences are insufficient to deter
          people from committing crimes in the future. As a result, paper
          involvement and mild punishment are insufficient and ineffective in
          this phenomenon. Every year, most multinational pharmaceutical
          corporations face hefty fines for engaging in black marketing
          operations to varying degrees. This penalty may be equal to the whole
          income of a tiny institution, such as the Asia Pacific. According to
          circular 11/2019/TT-BKHDT issued by the Ministry of Planning and
          Investment on the 16th of December 2019, detailed regulations on the
          provision and posting of bidding information, as well as the roadmap
          for the application of online tendering beginning in 2020 for 100
          percent bidding packages not exceeding 5 billion VND, will be
          implemented. Ironically, this strategy necessitates a plethora of
          procedures and technical qualifications, such as setting up an
          environment, creating an account, registering business processes, and
          counseling, which is completely out of reach for the great majority of
          farmers.
        </span>
      </div>
    </div>
  );
};

export default Post;
