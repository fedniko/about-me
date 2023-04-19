import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Switch from '@/components/switch/switch';
import { scrollIntoSkills } from './skills/skills';
import { scrollIntoFacts } from './facts/facts';

export default function MainLayout({ children, title }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=11" />
      </Head>
      <header className="header">
        <Container>
          <Row>
            <Col xs="12" className="header__logo">
              <Link href="/">
                <Image
                  className="header__logo_img"
                  width="100"
                  height="100"
                  src="/img/logo.svg"
                  alt="logo"
                />
              </Link>
              <p className="text">Nikolay Fedorov</p>
              <Switch />
            </Col>
          </Row>
        </Container>
        <div className="header__top" />
        <Container>
          <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
              role="navigation"
            >
              <Nav className="mr-auto justify-content-center">
                <a className="nav-link text" onClick={() => scrollIntoFacts()}>
                  Random Facts
                </a>
                <a className="nav-link text" onClick={() => scrollIntoSkills()}>
                  Skills
                </a>
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
                  <p className="text footer__text">Sections</p>
                </Col>
              </Row>
              <Row className="footer__top__links">
                <Col>
                  <div className="footer__links">
                    <a
                      className="text footer__text"
                      onClick={() => scrollIntoFacts()}
                    >
                      Random Facts
                    </a>
                    <a
                      className="text footer__text"
                      onClick={() => scrollIntoSkills()}
                    >
                      Skills
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl="4" lg="4" md="4" sm="12" xs="12" className="footer__icons">
              <div className="footer__icons__item">
                <Link href="https://instagram.com/fedniko">
                  <Image
                    className="header__logo_img"
                    src="/img/instagram.svg"
                    width="20"
                    height="20"
                    alt="instagram"
                  />
                </Link>
              </div>
              <div className="footer__icons__item">
                <Link href="https://github.com/fedniko">
                  <Image
                    className="header__logo_img"
                    src="/img/github.svg"
                    width="20"
                    height="20"
                    alt="github"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer__bottom">
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
