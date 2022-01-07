import React from 'react'
import PropTypes from 'prop-types'

const Header = ({user, isLogin, hasPlan, cartIsLoggin, hasAddedLocation}) => {
    return (
        <div>
            
        </div>
    )
}

Header.propTypes = {
    isLogin: PropTypes.Boolean,
    user: PropTypes.String,
    hasPlan: PropTypes.Boolean,
    cartIsLoggin: PropTypes.Boolean,
    hasAddedLocation: PropTypes.Boolean
}

export default Header
