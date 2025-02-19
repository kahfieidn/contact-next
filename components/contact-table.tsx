import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";

const ContactTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {

  const contacts = await getContacts(query, currentPage);

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contacts, index) => (
          <tr key={contacts.id} className="bg-white border-bo">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{contacts.name}</td>
            <td className="py-3 px-6">{contacts.phone}</td>
            <td className="py-3 px-6">
              {formatDate(contacts.createdAt.toString())}
            </td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton id={contacts.id}></EditButton>
              <DeleteButton id={contacts.id}></DeleteButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
