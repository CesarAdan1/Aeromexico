import React from 'react'
import './modal-ad.scss'
import { Modal, Radio, Form } from "antd";

const ModalAdd = ({show, toggle, showData}) => {

    const onSubmit = (values) => {
        showData(values)
      }

    return (
        <Modal
        title="Agregar un personaje"
        visible={show}
        onCancel={toggle}
        className="modal"
        footer={false}
      >
        <Form
          name="complex-form"
          onFinish={onSubmit}
          layout="vertical"
        >
          <div className="modal-stye">
            <div style={{ width: '47%' }}>
              <Form.Item
                name="name"
                label="NOMBRE"
              >
                <input className="input-form" />
              </Form.Item>
            </div>
            <div style={{ width: '47%' }}>
              <Form.Item
                
                name="birthday"
                label="CUMPLEAÑOS"
              >
                <input className="input-form" type="date" />
              </Form.Item>
            </div>
          </div>
          <div className="modal-stye">
            <div style={{ width: '47%' }}>
              <Form.Item
                name="eyecolor"
                label="COLOR DE OJOS"
              >
                <input className="input-form" />
              </Form.Item>
            </div>
            <div style={{ width: '47%' }}>
              <Form.Item
                name="eyehair"
                label="COLOR DE PELO"
              >
                <input className="input-form" />
              </Form.Item>
            </div>
          </div>
          <div className="modal-stye">
            <div style={{ width: '47%' }}>
              <Form.Item
                name="gender"
                label="GÉNERO"
              >
                <Radio.Group>
                  <Radio value={'female'}>Mujer</Radio>
                  <Radio value={'male'}>Hombre</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div style={{ width: '47%' }}>
              <Form.Item
                name="position"
                label="POSICIÓN"
              >
                <Radio.Group>
                  <Radio value={'student'}>Estudiante</Radio>
                  <Radio value={'staff'}>Staff</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
          <Form.Item
          name="image"
          >
            <input type="file" id="myFile" name="filename"></input>
          </Form.Item>
          <Form.Item>
            <button type="submit" className="button-save">
              GUARDAR
            </button>
          </Form.Item>
        </Form>
      </Modal>
    )
}

export default ModalAdd;
