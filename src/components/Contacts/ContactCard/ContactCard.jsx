import PropTypes from 'prop-types'
import React from 'react'

const ContactCard = ({ contact }) => {
    return (
        <div>
            <div>
                <img alt={contact.avatar_url} src={contact.avatar_url} /><h3>{contact.full_name}</h3> - <h4>{contact.company}</h4>
            </div>
            <p>{contact.details}</p>
            <ul>
                <li>email: {contact.email}</li>
                <li>phone: {contact.phone_number}</li>
                <li>
                    <h4>{contact.addresses.length > 1 ? 'Addresses:' : 'Address:'}</h4>
                    {
                        contact.addresses.map((address, idx) => (
                            <ul key={idx}>
                                {
                                    Object.keys(address).map((key, idx) =>
                                        <li key={idx}>
                                            {address[key]}
                                        </li>
                                    )
                                }
                            </ul>
                        ))
                    }
                </li>
            </ul>
        </div>
    )
}

export default ContactCard

ContactCard.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar_url: PropTypes.string,
        full_name: PropTypes.string,
        company: PropTypes.string,
        details: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        addresses: PropTypes.arrayOf(
            PropTypes.shape({
                line_1: PropTypes.string.isRequired,
                line_2: PropTypes.string.isRequired,
                zip_code: PropTypes.number.isRequired,
            }))
    })
}