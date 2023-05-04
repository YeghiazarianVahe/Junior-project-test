import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <>
      <main>
        <section className="block1">
          <p className="title">Photography</p>
          <p className="text">
            All images used in the <strong>Pages</strong> Webflow Template are
            licensed for free personal <br /> and commercial use. If you'd like
            to use any specific image, you can check the licenses and <br />
            download the images for free on <strong>Unsplash, Pexels.</strong>
          </p>
        </section>
        <section className="block2">
          <p className="title">Pexels:</p>
          <p className="text">
            Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image
            8
          </p>
          <br />
          <br />
          <p className="title">Unsplash:</p>
          <p className="text2">Image 1, Image 2, Image 3</p>
          <br />
          <br />
          <div className="fonts">
            <p className="title">Fonts</p>
            <p className="text">
              Pages template uses free licensed <strong>Google Fonts</strong>.
              Please check <strong>Cardo</strong> and <strong>Inter</strong>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
