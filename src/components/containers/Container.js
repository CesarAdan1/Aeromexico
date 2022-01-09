import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import './container.scss';
import ButtonFilterBy from '../buttons/optionFilter/ButtonFilterBy';
import CardPotter from '../cards/HarryPotterCard/CardPotter';
import characters from '../../data/hp-characters.json'

const MainContent = ({dataHP, loading}) => {
    const [activeStudent, setActiveStudents] = useState(true)
    const [activeStaff, setActiveStaff] = useState(false)

    const handleStudents = () => {
        setActiveStudents(true)
        setActiveStaff(false)
    }

    const handleStaff = () => {
        setActiveStaff(true)
        setActiveStudents(false)
    }

    return (
        <div className='main'>
            <div className='main--sec'>
                <ButtonFilterBy
                    className={`${activeStudent ? 'content-btn-active' : 'content-btn'}`}
                    title="Estudiantes"
                    onClick={handleStudents}
                />
                <ButtonFilterBy
                    title="Staff"
                    onClick={handleStaff}
                    className={`${activeStaff ? 'content-btn-active' : 'content-btn'}`}
                />
            </div>
            <div className='main-'>
            </div>
            {
                characters.map(gryp => {
                    if (gryp.hogwartsStudent && activeStudent) {
                        return (<CardPotter key={uuidv4()} info={gryp} />)
                    } else if (gryp.hogwartsStaff && activeStaff) {
                        return (<Card key={uuidv4()} info={gryp} />)
                    } else null
                })
            }

        </div>
    )
}

const mapStateToProps = (store) => {
    const { dataHP, loading } = store
    return { dataHP, loading }
}

export default connect(mapStateToProps)(MainContent)