import React from 'react';
import ftPrueba from '../img/logo-elite-213px.png'

export default function Products() {

  return (
    <div className="container">
      <div className='text-center h2'>
        Productos
      </div>
      <div className="card">
        <div className="card-header text-center">
          Lista de productos
        </div>
        <div className="card-body text-center row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5">

          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 01
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 02
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 03
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 04
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 05
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 06
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 07
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 08
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ftPrueba} alt="" className='card-img-top rounded img-fluid' />
              <div className="card-body">
                <div className="card-title">
                  Producto 09
                </div>
                <div className="card-text">
                  Descripción - Precio
                </div>
              </div>
            </div>
          </div>
          

        </div>
        <div className="card-footer text-center">
          atras - siguiente
        </div>
      </div>
    </div>
  )
}