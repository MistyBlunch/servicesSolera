import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'

export interface ServiceFormInterface {
  passData?: {}
}

const ServiceForm = (props: any) => {
  const { register, handleSubmit } = useForm()

  const onSubmitFn = (data: any) => {
    props.passData(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitFn)}>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Servicio</Card.Title>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              required
              {...register('name', { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              required
              {...register('description', { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              required
              {...register('category', { required: true })}
            />
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-success" type="submit">
            Grabar
          </Button>
          <Button variant="outline-danger">Cancelar</Button>
        </Card.Footer>
      </Card>
    </Form>
  )
}

export default ServiceForm
