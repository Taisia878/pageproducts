import React from "react";
import "./Features.css";

function Features() {
  const items = [
    {
      id: 1,
      icon: "/delivery.png",
      title: "Доставка",
      text: "Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non.",
    },
    {
      id: 2,
      icon: "/payment.png",
      title: "Оплата",
      text: "Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non.",
    },
    {
      id: 3,
      icon: "/organization.png",
      title: "Організація",
      text: "Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non.",
    },
    {
      id: 4,
      icon: "/planning.png",
      title: "Планування",
      text: "Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non.",
    },
  ];

  return (
    <section className="features">
      <div className="features__container">
        {items.map((item) => (
          <div key={item.id} className="features__card">
            <img
              className="features__icon"
              src={item.icon}
              alt={item.title}
            />
            <h3 className="features__title">{item.title}</h3>
            <p className="features__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;