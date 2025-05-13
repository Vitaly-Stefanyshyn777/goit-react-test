import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchContacts } from "../redux/contacts/operation";
import { useEffect } from "react";

function ContactPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    console.log("jjjnjj");
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default ContactPage;
