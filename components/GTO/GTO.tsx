import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import Image from 'next/image';

export default function GTO() {
  const [items, setItems] = useState<any>([]);
  const [results, setResults] = useState<any>([
    {
      id: 1,
      name: 'Бег на 30 м (с)',
      bronze: 4.9,
      silver: 4.7,
      gold: 4.4,
      value: '',
    },
    {
      id: 2,
      name: 'Бег на 3000 м (мин, с)',
      bronze: 15,
      silver: 14.5,
      gold: 12.66,
      value: '',
    },
    {
      id: 3,
      name: 'Подтягивание из виса на высокой перекладине (кол-во раз)',
      bronze: 9,
      silver: 11,
      gold: 14,
      value: '',
    },
    {
      id: 4,
      name: 'Наклон вперёд из положения стоя на гимнастической скамье (от уровня скамьи — см)',
      bronze: 6,
      silver: 8,
      gold: 13,
      value: '',
    },
  ]);

  function handleChange(e: any, index: number) {
    items[index] = e.target.value;
    setItems(() => [...items]);
  }

  function checkResult() {
    if (items[0] <= 4.4) {
      results[0].value = 'Золото';
      setResults(() => [...results]);
    } else if (items[0] <= 4.7) {
      results[0].value = 'Серебро';
      setResults(() => [...results]);
    } else if (items[0] <= 4.9) {
      results[0].value = 'Бронза';
      setResults(() => [...results]);
    } else if (items[0]) {
      results[0].value = 'Плохо';
      setResults(() => [...results]);
    }

    if (items[1] <= 12.33) {
      results[1].value = 'Золото';
      setResults(() => [...results]);
    } else if (items[1] <= 12.5) {
      results[1].value = 'Серебро';
      setResults(() => [...results]);
    } else if (items[1] <= 15) {
      results[1].value = 'Бронза';
      setResults(() => [...results]);
    } else if (items[1]) {
      results[1].value = 'Плохо';
      setResults(() => [...results]);
    }

    if (items[2] >= 14) {
      results[2].value = 'Золото';
      setResults(() => [...results]);
    } else if (items[2] >= 11) {
      results[2].value = 'Серебро';
      setResults(() => [...results]);
    } else if (items[2] >= 9) {
      results[2].value = 'Бронза';
      setResults(() => [...results]);
    } else if (items[2]) {
      results[2].value = 'Плохо';
      setResults(() => [...results]);
    }

    if (items[3] >= 13) {
      results[3].value = 'Золото';
      setResults(() => [...results]);
    } else if (items[3] >= 8) {
      results[3].value = 'Серебро';
      setResults(() => [...results]);
    } else if (items[3] >= 6) {
      results[3].value = 'Бронза';
      setResults(() => [...results]);
    } else if (items[3]) {
      results[3].value = 'Плохо';
      setResults(() => [...results]);
    }
  }

  return (
    <section className="GTO">
      <Container>
        <Row>
          <Col>
            <h2 className="heading d-flex justify-content-center mb-4">
              Сдача ГТО
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Введите ваш возраст</Form.Label>
                <Form.Control type="number" placeholder="Полных лет" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="align-items-start">
          <Col>
            <Form>
              {results.map((result: any, index: number) => (
                <Form.Group
                  className="mb-3"
                  controlId={`formBasic${result.id}`}
                  key={result.id}
                >
                  <Form.Label>{result.name}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Введите ваш результат"
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              ))}
              <Button
                variant="primary"
                type="button"
                onClick={() => checkResult()}
              >
                Проверить
              </Button>
            </Form>
          </Col>
          <Col className="GTO__results">
            {results.map((result: any) => (
              <div className="GTO__results__item" key={result.id}>
                {/* eslint-disable no-nested-ternary */}
                {result.value === 'Золото' ? (
                  <>
                    <div className="GTO__results__item__picture">
                      <Image
                        src="/img/gold-medal.svg"
                        width="70"
                        height="70"
                        alt="medal"
                      />
                    </div>
                    <p className="GTO__results__item__text">Отлично!</p>
                  </>
                ) : result.value === 'Серебро' ? (
                  <>
                    <div className="GTO__results__item__picture">
                      <Image
                        src="/img/silver-medal.svg"
                        width="70"
                        height="70"
                        alt="medal"
                      />
                    </div>
                    <p className="GTO__results__item__text">Хорошо!</p>
                  </>
                ) : result.value === 'Бронза' ? (
                  <>
                    <div className="GTO__results__item__picture">
                      <Image
                        src="/img/bronze-medal.svg"
                        width="70"
                        height="70"
                        alt="medal"
                      />
                    </div>
                    <p className="GTO__results__item__text">Неплохо!</p>
                  </>
                ) : result.value === 'Плохо' ? (
                  <>
                    <div className="GTO__results__item__picture">
                      <Image
                        src="/img/exercise.svg"
                        width="70"
                        height="70"
                        alt="medal"
                      />
                    </div>
                    <p className="GTO__results__item__text">
                      Потренируйтесь и попробуйте еще
                    </p>
                  </>
                ) : (
                  <>
                    <div className="GTO__results__item__picture">
                      <Image
                        src="/img/arrow-left.svg"
                        width="70"
                        height="70"
                        alt="medal"
                      />
                    </div>
                    <p className="GTO__results__item__text">
                      Введите ваши результаты для итогов
                    </p>
                  </>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
