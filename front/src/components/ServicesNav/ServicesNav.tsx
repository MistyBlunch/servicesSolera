import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export interface ServicesNavInterface {
  services?: {}
  passAllServices?: {}
}

const ServicesNav: React.FC<ServicesNavInterface> = (
  { services }: any,
  props: any
) => {
  let categories = ['Todos', 'Autos', 'Salud', 'Hogar']
  let servicesByCat: any[] = []

  const filterServicesByCat = (category: string) => {
    if (category === 'Todos') return services
    servicesByCat = services.filter(
      (service: { category: string }) => {
        console.log(service.category)
        return service.category === category
      }
    )

    return servicesByCat
  }

  const selectTypeService = (selectedKey: any) => {
    const services = filterServicesByCat(selectedKey)
    console.log('servicesFiltered', services)
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav
            onSelect={(selectedKey) => selectTypeService(selectedKey)}
          >
            {categories.map((opt, i) => (
              <Nav.Item key={i}>
                <Nav.Link eventKey={opt}>{opt}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default ServicesNav
