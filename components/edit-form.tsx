"use client";

import { updateContact } from "@/lib/action";
import { useActionState } from "react";
import { SubmitButton } from "@/components/buttons";
import type { Contact } from "@prisma/client";

const UpdateForm = ({ contact }: { contact: Contact }) => {
  const UpdateContactWithId = updateContact.bind(null, contact.id);
  const [state, formAction] = useActionState(UpdateContactWithId, null);
  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Full Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="name"
            id="name"
            placeholder="Full Name..."
            defaultValue={contact.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            Phone Number
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="phone"
            id="phone"
            placeholder="Phone Number..."
            defaultValue={contact.phone}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="Update"></SubmitButton>
      </form>
    </div>
  );
};

export default UpdateForm;
