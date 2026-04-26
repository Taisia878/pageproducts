import React from "react";
import './Cozyset.css';

function Cozyset() {
  const cozysetItems = [
    { id: 1, image: "/coz1.jpg", title: <>Lorem ipsum dolor sit amet consectetur.<br />Gravida convallis id orci egestas non.</> },
    { id: 2, image: "/coz2.jpg", title: <>Lorem ipsum dolor sit amet consectetur. <br />Gravida convallis id orci egestas non. </> },
    { id: 3, image: "/coz3.jpg", title: <>Lorem ipsum dolor sit amet consectetur.</> },
  ];

  return (
    <section className="cozyset">
      <h2 className="cozyset__title">ЗАТИШНІ НАБОРИ</h2>
      <div className="cozyset__container">
        {cozysetItems.map((item, index) => (
         <div
         key={item.id}
         className={`cozyset__item cozyset__item--${index + 1}`}
       >
         <img
           src={item.image}
           alt=""
           className="cozyset__image"
         />

         <div className="cozyset__label">
           {item.title}
         </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cozyset;
