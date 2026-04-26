import React from "react";
import "./Sections.css";

function Sections() {
  const data = [
    {
      id: 1,
      title: "НАЗВА РОЗДІЛУ",
      text: <>Lorem ipsum dolor sit amet consectetur.Gravida convallis id orci egestas non.Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras<br /> vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet 
      sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus </> },
    {
      id: 2,
      title: "НАЗВА РОЗДІЛУ",
      text:<>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet <br />
      sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar.<br /> Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor a </> },
    {
      id: 3,
      title: "НАЗВА РОЗДІЛУ",
      text: <>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. <br />Purus vitae risus laoreet vel quis volutpat facilisi justo sed.
      Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed.
      Pellentesque odio feugiat volutpat amet <br />
     sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. 
     Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
      ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. 
     Commodo risus dolor turpis suspendisse convallis.<br />
     sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. 
     Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
      ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. 
     Commodo risus dolor turpis suspendisse convallis.</> }
  ];

  return (
    <section className="sections">
      <div className="sections__container">
        {data.map((item) => (
          <div key={item.id} className="sections__block">
            <h2 className="sections__title">{item.title}</h2>
            <p className="sections__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sections;