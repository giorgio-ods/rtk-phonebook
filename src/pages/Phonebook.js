import { ContactsList } from "../components/Contacts/ContactsList";
import { useFetchContactsQuery } from "../redux/contacts/contactsSlice";

export const PhoneBook = () => {
  const { data, isFetching } = useFetchContactsQuery();
  return (
    <>
      {" "}
      <h1>PhoneBook</h1>
      {data && <ContactsList contacts={data} />}
    </>
  );
};
