import PropTypes from 'prop-types';
import { formatContact } from "./utils";
import ContactCard from "../ContactCard/ContactCard";
import React, { useMemo } from "react";
import './Ejercicio1.css'


const ContactsScreen = ({ contacts, cities, states }) => {

    const contactsToDisplay = useMemo(() => contacts.map(contact => formatContact(contact, cities, states)), [contacts, cities, states])

    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/contacts">My Contacts</a></li>
                </ul>
            </nav>
            <h1>Contacts 👥</h1>
            <div className="contact_container">
                {
                    contactsToDisplay.map((contact, idx) => (
                        <ContactCard
                            key={idx}
                            contact={contact}
                        />
                    ))}
            </div>
        </div>)
        ;
};

export default React.memo(ContactsScreen)


ContactsScreen.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar_url: PropTypes.string,
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            company: PropTypes.string,
            details: PropTypes.string,
            email: PropTypes.string,
            phone_number: PropTypes.shape({
                area_code: PropTypes.number,
                number: PropTypes.number,
            }),
            addresses: PropTypes.arrayOf(
                PropTypes.shape({
                    line_1: PropTypes.string.isRequired,
                    line_2: PropTypes.string.isRequired,
                    zip_code: PropTypes.number.isRequired,
                }))
        })),
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string,
            id: PropTypes.number.isRequired
        })
    ),
    states: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string,
            id: PropTypes.number.isRequired
        })
    )
}
