import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { Col, Row } from 'antd';
import'./index.scss'
const HomePage = () => {
  return (
    <div>
      <section className='sec1'>
        <img src="https://preview.colorlib.com/theme/course/images/courses_background.jpg" alt="homelogo" />
      </section>
      <section className='sec2'>
        <h1>Popular Courses</h1>
      <Row>
    <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
       <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/course/images/course_1.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col
      xs={{
        span: 11,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
     <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/course/images/course_2.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
       <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/course/images/course_3.jpg" />}
  >
    <Meta title="A complete guide to design" description="Adobe Guide, Layes, Smart Objects etc..." />
  </Card>
    </Col>
  </Row>
      </section>
    </div>
  )
}

export default HomePage