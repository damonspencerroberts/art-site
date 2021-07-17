import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss';

function Header({content, fontSize = 20 }) {
    return (
        <div className={styles.Header} style={{fontSize: fontSize}}>
            {content}
        </div>
    )
}

Header.propTypes = {
    content: PropTypes.string,
    fontSize: PropTypes.number
}

export default Header;
