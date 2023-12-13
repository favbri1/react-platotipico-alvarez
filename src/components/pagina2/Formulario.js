import React from 'react'
import  Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export const Formulario = () => {
  return (
    <Form className='fork'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Inserte Gmail Aqui</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        No compartas tu informacion con personas ajenas.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Notificame de nuevas actualizaciones" />
    </Form.Group>
    <Form.Group>
    <Form.Select aria-label="Default select example">
      <option>Seleccione su genero</option>
      <option value="1">Hombre</option>
      <option value="2">Mujer</option>
      <option value="3">Otro</option>
    </Form.Select>
    </Form.Group>
    <br/>
    <Button variant="primary" type="submit">
      Iniciar
    </Button>
    <Button variant="primary" type="submit" className='boton4'>
      Registrarse
    </Button>
  </Form>
  )
}

