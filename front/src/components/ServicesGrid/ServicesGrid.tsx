import { Service } from '@/utils/interfaces/service'
import React, { useEffect, useState, useReducer, useRef } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
export interface ServicesGridInterface {
  serviceData?: {}
}

const ServicesGrid: React.FC<ServicesGridInterface> = ({
  serviceData,
}: any) => {
  const [allServices, setsAllServices] = useState([] as Service[])
  const [, update] = useReducer((x) => x + 1, 0)
  const effectRan = useRef(false)

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
    <div>
      <Row>
        {allServices.map((service, i) => (
          <Col sm key={i}>
            <Card style={{ width: '18rem' }} className="mb-3">
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="py-3">
                <Card.Link href="#">Editar</Card.Link>
                <Card.Link href="#">Eliminar</Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ServicesGrid
