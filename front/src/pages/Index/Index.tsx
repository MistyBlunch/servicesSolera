import React from 'react'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react'
import { Service } from '@/utils/interfaces/service'
import { Col, Row } from 'react-bootstrap'
import { ServicesNav } from '@/components/ServicesNav'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ServiceForm } from '@/components/ServiceForm'

export interface IndexInterface {}

const Index: React.FC<IndexInterface> = () => {
  const [serviceData, setsServiceData] = useState({})

  const passData = (service: Service) => {
    setsServiceData(service)
  }

  return (
    <Container className="mt-5">
      <h1 className="h1 text-center">Servicios</h1>
      <ServicesNav />
      <Row className="mt-4">
        <Col sm={8}>
          <ServicesGrid serviceData={serviceData} />
        </Col>
        <Col sm={4}>
          <ServiceForm passData={passData} />
        </Col>
      </Row>
    </Container>
  )
}

export default Index
