import Head from 'next/head';
import Link from "next/link";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

export default function MainLayout({children, title}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=11"/>
      </Head>
      <header className="header">
        <Container>
          <Row>
            <Col xl="1" lg="1" md="2" sm="3" xs="3" className="header__logo">
              <Link href="/">
                <a>
                  <img
                    className="header__logo_img"
                    src="/img/logo.svg"
                    alt="logo"
                  />
                </a>
              </Link>
            </Col>
            <Col xl="4" lg="5" md="6" sm="8" xs="8" className="header__links">
              <Link href="/">
                <a className="text">Lorem ipsum</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem ipsum dolor sit amet</a>
              </Link>
            </Col>
            <Col
              xl={{span: 1, offset: 6}}
              lg={{span: 1, offset: 5}}
              md={{span: 1, offset: 3}}
              sm={{span: 1, offset: 0}}
              xs={{span: 1, offset: 0}}
              className="header__search"
            >
              <Link href="/">
                <a className="text header__text">
                  <img
                    className="header__user__img"
                    src="/img/person.svg"
                    alt="user"
                    width="20px"
                    height="20px"
                  />
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className="header__top"/>
        <Container>
          <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link href="/">
                  <a className="nav-link text">Lorem ipsum</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">Lorem ipsum</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">Lorem ipsum</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">Lorem ipsum</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">Lorem</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">Lorem ipsum</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">Lorem</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <Container className="footer__container">
          <Row className="footer__top">
            <Col xl="8" lg="8" md="8" sm="12" xs="12">
              <Row className="footer__top__header">
                <Col>
                  <p className="text footer__text">Lorem</p>
                </Col>
              </Row>
              <Row className="footer__top__links">
                <Col>
                  <div className="footer__links">
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl="4" lg="4" md="4" sm="12" xs="12">
              <Row className="footer__phone">
                <Col>
                  <a
                    className="text footer__text footer__phone_text"
                    href="tel:+79999999999"
                  >
                    +7 999 999-99-99
                  </a>
                </Col>
              </Row>
              <Row className="footer__phone__bottom_text">
                <Col>
                  <p className="text footer__text">Lorem ipsum dolor sit</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="footer__middle">
          <Container className="footer__middle__container">
            <Row>
              <Col
                xl="7"
                lg="8"
                md="9"
                sm="12"
                xs="12"
                className="footer__middle__links"
              >
                <div className="footer__middle__links__item">
                  <h2 className="text footer__text">Lorem ipsum dolor</h2>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                </div>
                <div className="footer__middle__links__item">
                  <h2 className="text footer__text">Lorem ipsum dolor</h2>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                </div>
                <div className="footer__middle__links__item">
                  <h2 className="text footer__text">Lorem</h2>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                </div>
              </Col>
              <Col
                xl={{span: 4, offset: 1}}
                lg={{span: 4, offset: 0}}
                md={{span: 3, offset: 0}}
                sm="12"
                xs="12"
              >
                <p className="text footer__text footer__middle__last">
                  Lorem ipsum dolor sit amet
                  <br/> Lorem ipsum
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="footer__bottom__container">
            <Row>
              <Col>
                <p className="text footer__text">
                  Designed and created by FedNiko 2021
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
