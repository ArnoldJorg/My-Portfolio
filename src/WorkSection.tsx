import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WorkSection = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (onInViewChange) onInViewChange(inView, "work");

  return (
    <div
      ref={ref}
      id="work-section"
      className=" text-white bg-custom-grey w-full h-min-screen"
    >
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p> fesnfifsnoaefnisfoonewoifwnfoewanfioninoio</p>
      <p className="p-10 bg-grey-900">
        fesnfifsnoaefnisfoonewoifwnfoewanfioninoio
      </p>
      <p className="p-10 bg-grey-900">
        fesnfifsnoaefnisfoonewoifwnfoewanfioninoio
      </p>{" "}
      <p className="p-10 bg-grey-900">
        fesnfifsnoaefnisfoonewoifwnfoewanfioninoio
      </p>{" "}
      <p className="p-10 bg-grey-900">
        fesnfifsnoaefnisfoonewoifwnfoewanfioninoio
      </p>{" "}
      <p className="p-10 bg-grey-900">
        fesnfifsnoaefnisfoonewoifwnfoewanfioninoio
      </p>{" "}
      <p className="p-10 bg-grey-900">
        fesnfifsnoaefnisfoonewoifwnfoewanfioninoio
      </p>{" "}
      <p className="p-10 bg-grey-900">
        fesnfifsnoaefnisfoonewoifwnfoewanfioninoio
      </p>
    </div>
  );
};

export default WorkSection;
