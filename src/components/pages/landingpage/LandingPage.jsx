import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos del carrousel


const LandingPage = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        
      >
        <div>
          <img
            src={
              "https://res.cloudinary.com/dhme3fmky/image/upload/v1692667546/cardon_maq6eu.jpg"
            }
            alt=""
          />
        </div>
        <div>
          <img
            src={
              "https://res.cloudinary.com/dhme3fmky/image/upload/v1692667583/eucalipto_qiwxvz.jpg"
            }
            alt=""
          />
        </div>
        <div>
          <img
            src={
              "https://res.cloudinary.com/dhme3fmky/image/upload/v1692667589/ficus_lzvp6z.jpg"
            }
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default LandingPage;
