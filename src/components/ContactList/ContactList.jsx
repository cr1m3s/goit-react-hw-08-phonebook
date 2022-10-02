import { useSelector } from 'react-redux';

import style from '../../components/ContactList/ContactList.module.css';
import { Loader } from '../../components/Loader/Loader.jsx';
import { filterSlice, contactsSlice } from '../../redux/contacts';
import ContactsItem from '../../components/ContactsItem';

function ContactList() {
  const { data: contacts, isLoading: loadingList } =
    contactsSlice.useFetchContactsQuery();
  const filterValue = useSelector(filterSlice.getFilter);

  // console.log(contacts.length);

  const getContactsFilter = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter)
      )
    );
  };
  const contactsFilter = getContactsFilter();

  return (
    <div>
      {loadingList && <Loader />}
      {contacts && (
        <ol className={style.contacts}>
          {contactsFilter.map(contact => (
            <ContactsItem key={contact.id} contact={contact} />
          ))}
        </ol>
      )}
    </div>
  );
}

export default ContactList;
