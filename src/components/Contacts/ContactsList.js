export const ContactsList = ({ contacts, onDelete, deleting }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {`${contact.name}:${contact.phone}`}
          <button
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            {deleting ? "Removing..." : "Remove"}
          </button>{" "}
        </li>
      ))}
    </ul>
  );
};
