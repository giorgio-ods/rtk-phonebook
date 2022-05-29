import { useAddContactMutation } from "../redux/contacts/contactsSlice";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export const AddContactPage = () => {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [addContact] = useAddContactMutation();
  const history = useNavigate();
  const contact = {
    id: nanoid(),
    name: nameValue,
    number: numberValue,
  };
  const addContactHandler = async () => {
    // e.preventDefault();
    try {
      await addContact(contact);
      history("/phonebook");
    } catch (error) {
      console.log("error");
    }
    setNameValue("");
    setNumberValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>
        Enter Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
      </label>
      <label>
        Enter Phone Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={numberValue}
          onChange={(e) => {
            setNumberValue(e.target.value);
          }}
        />
      </label>
      <button
        type="submit"
        onClick={() => {
          addContactHandler();
        }}
      >
        Add Contact
      </button>
    </form>
  );
};
