import { Link } from "react-router-dom";
import { ContactsList } from "../components/Contacts/ContactsList";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../redux/contacts/contactsSlice";

export const PhoneBook = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <div>
        <Link to="/contacts/addContact">Add new contact</Link>
      </div>
      <h1>PhoneBook</h1>
      {data && (
        <ContactsList
          contacts={data}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </>
  );
};
