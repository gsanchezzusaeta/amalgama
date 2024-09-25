export const contactsMock = [
    {
        id: 0,
        avatar_url: '',
        first_name: 'Juan',
        last_name: 'Lopez',
        company: 'Amalgama',
        details: 'Un crack',
        email: 'juan@gmail.com',
        phone: {
            area_code: '011',
            number: '1110201000'
        },
        addresses: [
            {
                line_1: 'Av Corrientes',
                line_2: 'Riobamba',
                zip_code: 1423,
                city_id: 1,
                state_id: 1,
            }
        ]
    },
    {
        id: 1,
        avatar_url: '',
        first_name: 'Juana',
        last_name: 'Sanchez',
        company: 'Amalgama',
        details: 'Una crack',
        email: 'juana@gmail.com',
        phone: {
            area_code: '011',
            number: '1110201001'
        },
        addresses: [
            {
                line_1: 'Av Corrientes',
                line_2: 'Riobamba',
                zip_code: 1423,
                city_id: 1,
                state_id: 1,
            }
        ]
    }

]

export const citiesMock = [
    {
        nombre: 'Balvanera',
        id: 1
    }
]

export const statesMock = [
    {
        nombre: 'CABA',
        id: 1
    }
]

function truncate(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

function findCityById(list, id) {
    return list.find(item => item?.id === id)
}

export function formatContact(contact, cities, states) {
    return {
        id: contact.id,
        avatar_url: contact.avatar_url,
        full_name: `${contact.first_name} ${contact.last_name}`,
        company: contact.company,
        details: truncate(contact.details, 100),
        email: contact.email,
        phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
        addresses: contact.addresses.map(address => ({
            line_1: address.line_1,
            line_2: address.line_2,
            zip_code: address.zip_code,
            city: findCityById(cities, address.city_id).nombre,
            state: findCityById(states, address.state_id).nombre,
        }))
    }
}