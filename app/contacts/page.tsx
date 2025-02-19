import ContactTable from "@/components/contact-table";
import Search from "@/components/search";
import { CreateButton } from "@/components/buttons";
import { getContactPages } from "@/lib/data";
import Pagination from "@/components/pagination";
import { TableSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

const Contacts = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const awaitedSearchParams = await searchParams;
  const query = awaitedSearchParams?.query || "";
  const currentPage = Number(awaitedSearchParams?.page) || 1;

  const totalPages = await getContactPages(query);

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages}></Pagination>
      </div>
    </div>
  );
};

export default Contacts;
