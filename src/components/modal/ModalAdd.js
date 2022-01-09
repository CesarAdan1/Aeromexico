import React from 'react'
import InputField from '../inputs/ifield/InputField'
import './modal-ad.scss'
import PropTypes from 'prop-types'
import CancelIcon from "@mui/icons-material/Cancel";

const ModalAdd = ({ children, onClickSave, onClickClose, title }) => {
    return <div className="modal-add">
    <div className="modal-add--content">
      <div className="modal-add--tab">
        <div className="modal-add--title">{title}</div>
        <div className="modal-add--close" onClick={onClickClose}>x</div>
      </div>
        {children}
        <section className="modal-add--sec4">
            <button className="modal-add--sec4-bt" onClick={onClickSave}>Guardar</button>
        </section>
    </div>
  </div>
}

ModalAdd.propTypes = {
    children: PropTypes.element.isRequired,
    shown: PropTypes.bool,
    close: PropTypes.func,
    title: PropTypes.string.isRequired
}

export default ModalAdd;
