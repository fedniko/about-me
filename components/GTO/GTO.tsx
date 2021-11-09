import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";

export default function GTO() {
  const [items, setItems] = useState<any>([])
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
    items[index] = e.target.value
    setItems(() => ([...items]))
  }

  function checkResult() {
    if (items[0] <= 4.4) {
      results[0].value = 'Золото'
      setResults(() => ([...results]))
    } else if (items[0] <= 4.7) {
      results[0].value = 'Серебро'
      setResults(() => ([...results]))
    } else if (items[0] <= 4.9) {
      results[0].value = 'Бронза'
      setResults(() => ([...results]))
    } else if (items[0]) {
      results[0].value = 'Плохо'
      setResults(() => ([...results]))
    }

    if (items[1] <= 12.33) {
      results[1].value = 'Золото'
      setResults(() => ([...results]))
    } else if (items[1] <= 12.5) {
      results[1].value = 'Серебро'
      setResults(() => ([...results]))
    } else if (items[1] <= 15) {
      results[1].value = 'Бронза'
      setResults(() => ([...results]))
    } else if (items[1]) {
      results[1].value = 'Плохо'
      setResults(() => ([...results]))
    }

    if (items[2] >= 14) {
      results[2].value = 'Золото'
      setResults(() => ([...results]))
    } else if (items[2] >= 11) {
      results[2].value = 'Серебро'
      setResults(() => ([...results]))
    } else if (items[2] >= 9) {
      results[2].value = 'Бронза'
      setResults(() => ([...results]))
    } else if (items[2]) {
      results[2].value = 'Плохо'
      setResults(() => ([...results]))
    }

    if (items[3] >= 13) {
      results[3].value = 'Золото'
      setResults(() => ([...results]))
    } else if (items[3] >= 8) {
      results[3].value = 'Серебро'
      setResults(() => ([...results]))
    } else if (items[3] >= 6) {
      results[3].value = 'Бронза'
      setResults(() => ([...results]))
    } else if (items[3]) {
      results[3].value = 'Плохо'
      setResults(() => ([...results]))
    }
  }

  return (
    <section className="GTO">
      <Container>
        <Row>
          <Col>
            <Form>
              {
                results.map((result: any, index: number) => (
                  <Form.Group className="mb-3" controlId="formBasic" key={result.id}>
                    <Form.Label>{result.name}</Form.Label>
                    <Form.Control type="number" placeholder="Введите ваш результат"
                                  onChange={(e) => handleChange(e, index)}/>
                    {
                      result.value && (
                        <Form.Text className="text-muted">
                          {result.value}
                        </Form.Text>
                      )
                    }
                  </Form.Group>
                ))
              }
              <Button variant="primary" type="button" onClick={() => checkResult()}>
                Проверить
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}