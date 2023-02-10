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
      <Row className="justify-content-around">
        {services.map((service: Service, i: number) => (
          <div key={i} className="mb-4 d-flex w-auto">
            <Card style={{ width: '14rem' }} className="mr-2">
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="py-3">
                <Card.Link href="#">Editar</Card.Link>
                <Card.Link href="#">Eliminar</Card.Link>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </Row>
    </div>
  )
}

export default ServicesGrid
