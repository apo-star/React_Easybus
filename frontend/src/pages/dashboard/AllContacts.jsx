import Spinner from "../../components/Spinner";
import { useContactsData, useDeleteContact } from "../../hooks/useContactsData";

const AllContacts = () => {
  const { data: contacts, isLoading: isContactDataLoading } = useContactsData();
  const { mutate, isLoading } = useDeleteContact();

  if (isContactDataLoading) {
    <Spinner />;
  }
  return <div></div>;
};

export default AllContacts;
