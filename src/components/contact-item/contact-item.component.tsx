import React from 'react'

export interface IContactItemProps {
    name: string;
    phoneNumber: string; 
}

const ContactItem = (props: IContactItemProps) => {
    return (
        <div>
            {props.name}
            {props.phoneNumber}
        </div>
    )
}

export default ContactItem
