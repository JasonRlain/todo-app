import React from "react";
import { useApiParmsStore } from "../state/apiParms";

function TablePagination({ total }: { total: number }) {
  const setPage = useApiParmsStore((state) => state.updatePage);
  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-black mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing
        <span className="pl-1 pr-1 font-semibold text-white">1-10</span>
        of
        <span className="pl-1 font-semibold text-white">{total}</span>
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        {Array.from({ length: Math.ceil(total / 10) }, (_, index) => (
          <div key={index} onClick={() => setPage(index + 1)}>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              >
                {index + 1}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default TablePagination;
