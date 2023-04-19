import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const skillsRef: any = React.createRef();

export function scrollIntoSkills() {
  skillsRef.current.scrollIntoView({ behavior: 'smooth' });
}

export default function Skills() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const myTheme: string =
    typeof window !== 'undefined' &&
    localStorage.getItem('theme') !== null &&
    localStorage.getItem('theme') !== undefined
      ? localStorage.getItem('theme')!
      : 'dark';
  const [posts, setPosts] = useState<any>([
    {
      id: 1,
      image_url: '/img/code.svg',
      dark_image_url: '/img/dark-theme/code.svg',
      light_image_url: '/img/code.svg',
      title: 'Code',
      description: 'JavaScript\nTypeScript\nDart',
    },
    {
      id: 2,
      image_url: '/img/layout.svg',
      dark_image_url: '/img/dark-theme/layout.svg',
      light_image_url: '/img/layout.svg',
      title: 'Layout',
      description: 'HTML5\nCSS\nSCSS',
    },
    {
      id: 3,
      image_url: '/img/frameworks.svg',
      dark_image_url: '/img/dark-theme/frameworks.svg',
      light_image_url: '/img/frameworks.svg',
      title: 'Frameworks',
      description: 'React\nNext.js\nFlutter',
    },
    {
      id: 4,
      image_url: '/img/design.svg',
      dark_image_url: '/img/dark-theme/design.svg',
      light_image_url: '/img/design.svg',
      title: 'Design',
      description: 'Figma\nAdobe PhotoShop',
    },
  ]);

  useEffect(() => {
    const newPosts = posts;
    newPosts.forEach((item: any) => {
      if (currentTheme === 'dark') {
        item.image_url = item.dark_image_url;
      } else {
        item.image_url = item.light_image_url;
      }
    });
    setPosts([...newPosts]);
  }, [currentTheme]);

  return (
    <section className="skills" ref={skillsRef}>
      <Container>
        <Row>
          <Col>
            <h2 className="text heading d-flex justify-content-center mb-4">
              My Skills
            </h2>
          </Col>
        </Row>
        <Row>
          {posts.map((item: any) => (
            <Col sm="6" md="6" lg="3" className="skills__item" key={item.id}>
              <div className="skills__item__body">
                <div className="skills__item__body__picture">
                  <Image
                    quality={75}
                    src={item.image_url}
                    alt="skills preview"
                    fill
                    priority
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div className="skills__item__body__info">
                  <h3 className="text skills__item__body__info__title">
                    {item.title}
                  </h3>
                  <p className="text skills__item__body__info__description">
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
