import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ParentListPage = () => {
  const renderRow = (item: Parent) => (
    <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <th className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </th>
      <th className="hidden md:table-cell">{item.students.join(",")}</th>
      <th className="hidden md:table-cell">{item.phone}</th>
      <th className="hidden md:table-cell">{item.address}</th>
      <th className="flex items-center gap-2">
        <Link href={`/dashboard/list/teachers/${item.id}`}>
          <button
            type="button"
            aria-label="Save"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
          >
            <Image alt="" width={16} height={16} src="/view.png" />
          </button>
        </Link>
        {role === "admin" && (
          <button
            type="button"
            aria-label="Save"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple"
          >
            <Image src="/delete.png" alt="" width={16} height={16} />
          </button>
        )}
      </th>
    </tr>
  );
  return (
    <div className="bg-white p-4 m-4 rounded-md mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg hidden md:block font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 m-2 self-end">
            <button
              className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center"
              type="button"
              aria-label="Save"
            >
              <Image src="/filter.png" height="14" width="14" alt="" />
            </button>
            <button
              className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center"
              type="button"
              aria-label="Save"
            >
              <Image src="/sort.png" height="14" width="14" alt="" />
            </button>
            <button
              type="button"
              aria-label="Save"
              className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center"
            >
              <Image src="/plus.png" height="14" width="14" alt="" />
            </button>
            <FormModal />
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      <Pagination />
    </div>
  );
};

export default ParentListPage;
