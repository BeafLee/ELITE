import React from 'react';
//import logo from "../img/logo.png";
import img01 from "../img/barber01.JPG"
import img02 from '../img/corte01.JPG'
import img03 from '../img/corte02.JPG'

export default function Home() {


  return (
    <div className=''>
      <h3 className='text-center mt-3'>
        BARBERÍA ÉLITE
      </h3>

      <div className='carousel slide' data-ride='carousel' id='CarouselHeader'>
        <div className='carousel-inner'>
          {/* <div className='carousel-item active'>
            <img src={logo} className='d-block w-100' alt="" />
          </div> */}
          <div className='carousel-item active'>
            <img src={img01} className='d-block w-100 img-fluid' alt="Foto 01" />
          </div>
          <div className='carousel-item'>
            <img src={img02} className='d-block w-100 img-fluid' alt="Foto 02" />
          </div>
          <div className='carousel-item'>
            <img src={img03} className='d-block w-100 img-fluid' alt="Foto 03" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#CarouselHeader" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#CarouselHeader" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h3 className='text-center mt-3'>
        En la ciudad de Chiclayo
      </h3>

    </div>
  )
}