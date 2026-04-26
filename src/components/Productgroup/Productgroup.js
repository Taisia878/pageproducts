import React from "react";
import "./Productgroup.css";

function Productgroup() {
  const items = [
    { id: 1, image: "/product-group1.jpg" },
    { id: 2, image: "/product-group2.jpg" },
    { id: 3, image: "/product-group3.jpg" },
    { id: 4, image: "/product-group4.jpg" },
  ];

  return (
    <section className="product-group">
      <h2 className="product-group__title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
      <p className="product-group__p">Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non. Ut pellentesque ultricies quis quis nec ultricies dolor eu sem. Duis tempus aliquam nisi volutpat vitae etiam turpis. At gravida risus eu pellentesque quis. Sed lobortis tincidunt in purus mauris eu consectetur non molestie. Scelerisque id amet quis eget ullamcorper donec non tempus. Malesuada amet nibh tellus nunc convallis elit ultrices. Felis viverra ac nunc felis. Nec ipsum feugiat faucibus eget mauris. Sed molestie facilisi ipsum ullamcorper aliquet. Nibh sed diam eu tincidunt dignissim porttitor vel blandit.</p>

      <div className="product-group__container">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`product-group__item product-group__item--${index + 1}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
    </section>
  );
}

export default Productgroup;