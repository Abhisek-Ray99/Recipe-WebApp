import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./skeleton.css";

const SkeletonCard = () => {
  return (
    <section>
      <ul className="skeleton-flex">
        {Array(6)
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <div className="card-image">
                <Skeleton height={270} width={180} />
              </div>
              <h4 className="card-title skele-title">
                
                  <Skeleton height={30} width={"80%"} />
                
              </h4>
              <div className="skele-p">
                
                  <Skeleton height={20} width={"100%"} />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SkeletonCard;
