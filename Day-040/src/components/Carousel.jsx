import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const images = [
  "https://5.imimg.com/data5/SELLER/Default/2023/3/DL/SJ/HX/76891463/jcb-excavator-rental-service.png",
  "https://thumbs.dreamstime.com/b/excavator-jcb-cx-sitemaster-tractor-excavates-soil-electrical-cable-lines-61526663.jpg",
  "https://www.bellequipment.com/forestryag/en-ZA/Media/Default/Content/Latest%20News/DT-Farming-2459-web.jpg",
  "https://www.bellequipment.com/forestryag/en-ZA/Media/Default/Content/Latest%20News/DT-Farming-4594-web.jpg",
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="gallery" className="carousel">
      <h2>📸 Our JCB Work</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt="JCB Work" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
