import {Col, Container, Row} from "react-bootstrap";
import {createRef, useState} from "react";
import React, {useRef} from 'react'

const factsRef: any = createRef();

export function scrollIntoFacts() {
  factsRef.current.scrollIntoView({ behavior: 'smooth'})
}

export default function Facts() {
  const [status, setStatus] = useState<number>(1);
  const [facts] = useState<any>([
    {
      id: 1,
      text: 'I love coding',
    },
    {
      id: 2,
      text: 'I love to play the piano',
    },
    {
      id: 3,
      text: 'I love dogs',
    },
    {
      id: 4,
      text: 'I love to eat',
    },
    {
      id: 5,
      text: 'I want to go to Hogwarts',
    },
    {
      id: 6,
      text: 'I love Pepe the Frog =)',
    },
  ]);
  const newElement = useRef<any>(null);

  function yodaClick() {
    const baby = "url('../img/logo.svg')";
    const adult = "url('../img/code.svg')";
    if (newElement.current != null) {
      if (status === 1) {
        newElement.current.style.backgroundImage = adult;
        setStatus(2);
      } else if (status === 2) {
        newElement.current.style.backgroundImage = baby;
        setStatus(1);
      }
    }
  }

  return (
    <section className="facts" ref={factsRef}>
      <Container>
        <Row>
          <Col>
            <div className="facts__eye" ref={newElement} onClick={() => yodaClick()}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="text facts__info">
              {
                facts.map((fact: any) => (
                  <li key={fact.id}>
                    {fact.text}
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}