import yargs from "yargs";
import contactsBook from "./contacts.js";

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContacts = await contactsBook.listContacts();
      console.log(listContacts);
      break;

    case "get":
      const findContact = await contactsBook.getContactById(id);
      console.log(findContact);
      break;

    case "add":
      const newContact = await contactsBook.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeContactw = await contactsBook.removeContact(id);
      console.log(removeContactw);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);

// invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Vitalii Ladanivskyi",
//   email: "v.ladanivskyi@ukr.net",
//   phone: "+38 067 549 5768",
// });
// invokeAction({ action: "remove", id: "TK6dFokl2RgDboHP-wDTh" });
