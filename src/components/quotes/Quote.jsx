import React from 'react'
import PropTypes from 'prop-types';

const Quote = ({ name, image, text }) => (
    <figure>
        <img src={image} alt={name} />
        <figcaption>
            {text} - {name}
        </figcaption>
    </figure>
)

Quote.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Quote;