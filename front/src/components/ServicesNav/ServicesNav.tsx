import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export interface ServicesNavInterface {}

const ServicesNav: React.FC<ServicesNavInterface> = () => {
  let categories = ['Todos', 'Autos', 'Salud', 'Hogar']
  let categoriesElements: any[] = []

  const setCategoriesElements = () => {
    let categoriesElements = categories.map((category) => {
      return <p color="#323232">{category}</p>
    })
  }

  setCategoriesElements()

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav
            className="me-auto"
            onSelect={(selectedKey) =>
              console.log(`selected ${selectedKey}`)
            }
          >
            {categories.map((opt, i) => (
              <Nav.Item key={i}>
                <Nav.Link eventKey={opt}>{opt}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </Navbar>

      {categoriesElements}
    </div>
  )
}

export default ServicesNav
