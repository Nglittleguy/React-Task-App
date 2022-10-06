import PropTypes from 'prop-types'

const Button = ({text, clickFunction}) => {

    return (
        <button 
            onClick = {clickFunction} 
            className="btn"
        >
            {text}        
        </button>
    )
}

Button.propTypes = {
    text : PropTypes.string,
    clickFunction: PropTypes.func
}

export default Button