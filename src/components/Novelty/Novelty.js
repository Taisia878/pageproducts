import React from "react";
import './Novelty.css';

function Novelty() {
  const noveltyItems = [
    { id: 1, image: "/nov1.jpg", title: <>Lorem ipsum dolor sit amet consectetur.<br />Gravida convallis id orci egestas non.</> },
    { id: 2, image: "/nov2.jpg", title: <>Lorem ipsum dolor sit amet consectetur. <br />Gravida convallis id orci egestas non. </> },
    { id: 3, image: "/nov3.jpg", title: <>Lorem ipsum dolor sit amet consectetur.</> },
  ];

  return (
    <section className="novelty">
      <h2 className="novelty__title">НОВИНКИ</h2>
      <div className="novelty__container">
        {noveltyItems.map((item, index) => (
         <div
         key={item.id}
         className={`novelty__item novelty__item--${index + 1}`}
       >
         <img
           src={item.image}
           alt=""
           className="novelty__image"
         />

         <div className="novelty__label">
           {item.title}
         </div>
          </div>
        ))}
      </div>


    </section>
  );
}

export default Novelty;
