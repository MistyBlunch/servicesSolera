import { Service } from '@/utils/interfaces/service'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
export interface ServicesGridInterface {
  services?: {}
}

const ServicesGrid: React.FC<ServicesGridInterface> = ({
  services,
}: any) => {
  return (
    <div>
      <Row>
        {services.map((service: Service, i: number) => (
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
