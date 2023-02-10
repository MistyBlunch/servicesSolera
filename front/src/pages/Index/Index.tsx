import { ServiceForm } from '@/components/ServiceForm'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ServicesNav } from '@/components/ServicesNav'
import { Service } from '@/utils/interfaces/service'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

export interface IndexInterface {}

const Index: React.FC<IndexInterface> = () => {
  const [serviceData, setsServiceData] = useState({})
  const [allServices, setsAllServices] = useState([] as Service[])
  const [, update] = useReducer((x) => x + 1, 0)
  const effectRan = useRef(false)

  const passData = (service: Service) => {
    setsServiceData(service)
  }

  useEffect(() => {
    if (effectRan.current) {
      let services: any = allServices
      services.push(serviceData)
      setsAllServices(services)
      update()
    }
    return () => {
      effectRan.current = true
    }
  }, [serviceData])

  return (
    <Container className="mt-5">
      <h1 className="h1 text-center">Servicios</h1>
      <ServicesNav serviceData={serviceData} />
      <Row className="mt-4">
        <Col sm={8}>
          <ServicesGrid services={allServices} />
        </Col>
        <Col sm={4}>
          <ServiceForm passData={passData} />
        </Col>
      </Row>
    </Container>
  )
}

export default Index
