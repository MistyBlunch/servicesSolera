import { Service } from '@/utils/interfaces/service'
import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export interface ServicesNavInterface {
  serviceData?: {}
}

const ServicesNav: React.FC<ServicesNavInterface> = ({
  serviceData,
}: any) => {
  let categories = ['Todos', 'Autos', 'Salud', 'Hogar']
  let data = [
    {
      name: 'a',
      description: 'a',
      category: 'a',
    },
    {
      name: 'b',
      description: 'b',
      category: 'b',
    },
    {
      name: 'b',
      description: 'b',
      category: 'b',
    },
    {
      name: 'c',
      description: 'c',
      category: 'c',
    },
    {
      name: 'c',
      description: 'c',
      category: 'c',
    },
  ]
  let servicesByCat: any[] = []

  const filterServicesByCat = (category: string) => {
    console.log('uwu', category, serviceData)
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
