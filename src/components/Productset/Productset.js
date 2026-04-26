import React from "react";
import './Productset.css';

function Productset() {
  const productsetItems = [
    { id: 1, image: "/productset1.jpg" },
    { id: 2, image: "/productset2.jpg" },
    { id: 3, image: "/productset3.jpg" },
    { id: 4, image: "/productset4.jpg" },
  ];

  return (
    <section className="productset">
      <h2 className="productset__title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
      <p className="productset__p">Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis<br/> sem massa id imperdiet arcu vulputate. Magna id facilisi diam arcu ipsum. Magna accumsan sed<br/> urna non fermentum. Tristique in turpis dolor in pulvinar pellentesque faucibus.</p>

      <div className="productset__container">
        {productsetItems.map((item, index) => (
          <div
            key={item.id}
            className={`productset__item productset__item--${index + 1}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
    </section>
  );
}
export default Productset;








