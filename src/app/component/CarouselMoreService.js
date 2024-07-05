import Image from 'next/image'
import Slider1 from '../../../public/Service2.1.jpg'
import Slider2 from '../../../public/Service2.2.jpg'
import Slider3 from '../../../public/Service1.1.jpg'
import Slider4 from '../../../public/Service1.2.jpg'
import Slider5 from '../../../public/image 1.jpg'
import Slider6 from '../../../public/image 2.jpg'
import Slider7 from '../../../public/About1.jpg'
import Slider8 from '../../../public/About2.jpg'



export default function Carousel(){
    return(
        <>
       <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={Slider1} className="d-block w-100" width={1000} height={740} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={Slider2} className="d-block w-100" width={1000} height={740} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={Slider3} className="d-block w-100" width={1000} height={740} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={Slider4} className="d-block w-100" width={1000} height={740} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={Slider5} className="d-block w-100" width={1000} height={740} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={Slider6} className="d-block w-100" width={1000} height={740} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={Slider7} className="d-block w-100" width={1000} height={740} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={Slider8} className="d-block w-100" width={1000} height={740} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    );
}