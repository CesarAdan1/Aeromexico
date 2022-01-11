import React from 'react'
import Footer from '../../components/common/Footer/Footer'
import Header from '../../components/common/Header/Header'
import MainContent from '../../components/containers/Container'

export const MainView = () => {
    return (
        <div className='main'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
