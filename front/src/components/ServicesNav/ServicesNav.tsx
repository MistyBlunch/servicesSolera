import { Service } from '@/utils/interfaces/service'
import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export interface ServicesNavInterface {
  services?: {}
}

const ServicesNav: React.FC<ServicesNavInterface> = ({
  services,
}: any) => {
  let categories = ['Todos', 'Autos', 'Salud', 'Hogar']
  let servicesByCat: any[] = []

  const filterServicesByCat = (category: string) => {
    console.log('uwu', category, services)
    // servicesByCat = categories.filter((category) => {
    //   return <p color="#323232">{category}</p>
    // })
  }

  const selectTypeService = (selectedKey: any) => {
    console.log(`selected ${selectedKey}`)
    filterServicesByCat(selectedKey)
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav
            className="me-auto"
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
