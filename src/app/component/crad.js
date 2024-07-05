import Image from "next/image";
import cardpic1 from "../../../public/logo1.jpg";
import cardpic2 from "../../../public/logo2.jpg";
import cardpic3 from "../../../public/logo3.jpg";

export default function Card() {
  return (
    <>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <Image src={cardpic1} className="card-img-top" alt="Card image" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">BoxTech</h5>
              <p className="card-text">
                This is a box Tech
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Image src={cardpic2} className="card-img-top" alt="Card image" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Global Impact</h5>
              <p className="card-text">
                This is a Global Impact
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Image src={cardpic3} className="card-img-top" alt="Card image" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Creative Tech</h5>
              <p className="card-text">
                This is a Creative Tech
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}