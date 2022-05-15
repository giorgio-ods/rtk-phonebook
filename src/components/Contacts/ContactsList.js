export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{`${contact.name}:${contact.phone}`}</li>
      ))}
    </ul>
  );
};
