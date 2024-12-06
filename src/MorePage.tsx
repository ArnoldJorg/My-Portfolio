import React from "react";

import { useInView } from "react-intersection-observer";

const MorePage = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (onInViewChange) onInViewChange(inView, "more");
  return (
    <div ref={ref} id="more-section" className="p-16 space-y-16 ">
      <p className="text-white">
        sfgiherw9abnerioghnewrg9h0rewghn09ewrg90hrewgh90
      </p>
      <p className="text-white">
        sfgiherw9abnerioghnewrg9h0rewghn09ewrg90hrewgh90
      </p>
      <p className="text-white">
        sfgiherw9abnerioghnewrg9h0rewghn09ewrg90hrewgh90
      </p>
      <p className="text-white">
        sfgiherw9abnerioghnewrg9h0rewghn09ewrg90hrewgh90
      </p>
      <p className="text-white">
        sfgiherw9abnerioghnewrg9h0rewghn09ewrg90hrewgh90
      </p>
      <p className="text-white">
        sfgiherw9abnerioghnewrg9h0rewghn09ewrg90hrewgh90
      </p>
      <p className="text-white">
        sfgiherw9abnerioghnewrg9h0rewghn09ewrg90hrewgh90
      </p>
    </div>
  );
};

export default MorePage;
