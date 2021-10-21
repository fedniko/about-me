import {Col, Container, Row} from "react-bootstrap";
import React, {useRef} from 'react'

export default function Pendulum() {
  const polyline = useRef<any>(null);
  const circle = useRef<any>(null);
  const input = useRef<any>(null);

  function polylineLengthPlus() {
    let newLength = parseInt(input.current.value) + 20;
    input.current.value = newLength;
    polyline.current.setAttribute("points", `200,10 200,${newLength}`);
    circle.current.setAttribute("cy", `${newLength}`);
  }

  function polylineLengthMinus() {
    let newLength = input.current.value - 20;
    input.current.value = newLength;
    polyline.current.setAttribute("points", `200,10 200,${newLength}`);
    circle.current.setAttribute("cy", `${newLength}`);
  }

  return (
    <section className="pendulum">
      <Container>
        <Row>
          <Col>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 width="100%" height="400" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="Rg" r="90%" fx="50%" fy="30%">
                  <stop stopColor="#F3F3F3" offset="5%" />
                  <stop stopColor="#3E3D44" offset="45%" />
                  <stop stopColor="black" offset="100%" stopOpacity="0.72"/>
                </radialGradient>
              </defs>
              <polyline fill="none" stroke="#d3d3d3" strokeWidth="20" points="-400,0 800,0"/>
              <g id="G1" fill="url(#Rg)">
                <polyline id="polyline" ref={polyline} fill="none" stroke="#4C4B53" strokeWidth="3" points="200,10 200,210"/>
                <circle id="circle" ref={circle} fill="url(#Rg)" strokeWidth="3" cx="200" cy="210" r="20"/>
              </g>
              <animateTransform xlinkHref="#G1"
                                attributeName="transform"
                                type="rotate"
                                begin="click"
                                dur="3.5s"
                                values="
                           60, 200, 10;
                          -60, 200,10;
                           60, 200, 10"
                                calcMode="spline"
                                keySplines=" 0.63 0.015 0.13 0.97; 0.63 0.015 0.13 0.97"
                                repeatCount="indefinite"
              />
              <circle fill="gray" stroke="black" strokeWidth="1" cx="200" cy="10" r="4"/>
            </svg>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <p>*Press the ball to start animation*</p>
            <div className="pendulum__form">
              <label htmlFor="myInput">Thread length (px):</label>
              <button className="pendulum__form__button minus" id="btn-minus" type="button"
                      onClick={() => polylineLengthMinus()}>-20
              </button>
              <input id="myInput" type="number" ref={input} value={210} readOnly />
              <button className="pendulum__form__button" id="btn-plus" type="button"
                      onClick={() => polylineLengthPlus()}>+20</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}