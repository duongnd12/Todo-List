import React from 'react'
import ContactItem, {IContactItemProps} from '../contact-item/contact-item.component';

interface IContactListProps {
    items: IContactItemProps[];
}

const ContactList = (props: IContactListProps) => {
    return (
        <div>
            {props.items.map((item) => {
                return <ContactItem name={item.name} phoneNumber={item.phoneNumber}/>
            })}
        </div>
    )
}

export default ContactList
