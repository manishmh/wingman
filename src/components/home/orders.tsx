"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

interface Order {
  id: number;
  image: string;
  name: string;
  date: string;
  time: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
}

const Orders = () => {
  const [data, setData] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const ITEMS_PER_PAGE = 4;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const sortCurrentData = (key: string) => {
    const direction = sortConfig?.direction === "asc" ? "desc" : "asc";
    const sortedData = [...currentData].sort((a, b) => {
      let aValue = a[key as keyof Order];
      let bValue = b[key as keyof Order];

      if (key === "orderValue" || key === "commission") {
        aValue = parseFloat(aValue.toString().replace("$", ""));
        bValue = parseFloat(bValue.toString().replace("$", ""));
      }

      if (key === "timeSpent") {
        const [aHours, aMinutes] = aValue
          .toString()
          .split("h ")
          .map((val) => parseInt(val.replace("m", "")));
        const [bHours, bMinutes] = bValue
          .toString()
          .split("h ")
          .map((val) => parseInt(val.replace("m", "")));
        aValue = aHours * 60 + aMinutes;
        bValue = bHours * 60 + bMinutes;
      }

      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData((prevData) => [
      ...prevData.slice(0, startIndex),
      ...sortedData,
      ...prevData.slice(endIndex),
    ]);
  };

  interface ApiResponse {
    id: number;
    thumbnailUrl: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=10"
        );
        const result = await response.json();

        const formattedData: Order[] = result.map((item: ApiResponse) => ({
          id: item.id,
          image: "/dashboard/Avatar.png",
          name: `Product ${item.id}`,
          date: "24 Apr '2024",
          time: "10:24 AM",
          timeSpent: "2h 5m",
          orderValue: `$${(item.id * 10).toFixed(2)}`,
          commission: `$${(item.id * 2).toFixed(2)}`,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getSortIcon = (key: string) => {
    if (sortConfig?.key !== key)
      return (
        <FaSort className="inline-block ml-2 opacity-0 group-hover:opacity-100" />
      );
    return sortConfig.direction === "asc" ? (
      <FaSortUp className="inline-block ml-2 opacity-100" />
    ) : (
      <FaSortDown className="inline-block ml-2 opacity-100" />
    );
  };

  return (
    <div className="w-full">
      <h1 className="text-font-black font-medium text-2xl mb-6">Orders</h1>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl min-h-[360px]">
            <table className="min-w-full border border-gray-200 bg-white text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-font-gray text-sm font-medium">
                    Product
                  </th>
                  <th
                    onClick={() => sortCurrentData("date")}
                    className="px-6 py-4 text-font-gray text-sm font-medium group cursor-pointer"
                  >
                    Date {getSortIcon("date")}
                  </th>
                  <th
                    onClick={() => sortCurrentData("timeSpent")}
                    className="px-6 py-4 text-font-gray text-sm font-medium group cursor-pointer"
                  >
                    Time Spent {getSortIcon("timeSpent")}
                  </th>
                  <th
                    onClick={() => sortCurrentData("orderValue")}
                    className="px-6 py-4 text-font-gray text-sm font-medium group cursor-pointer"
                  >
                    Order Value {getSortIcon("orderValue")}
                  </th>
                  <th
                    onClick={() => sortCurrentData("commission")}
                    className="px-6 py-4 text-font-gray text-sm font-medium group cursor-pointer"
                  >
                    Commission {getSortIcon("commission")}
                  </th>
                  <th className="px-6 py-4 text-font-gray text-sm font-medium">
                    Chart
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt="Product"
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                      </div>
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-font-black">{item.date}</div>
                      <div className="text-gray-500 text-sm">{item.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.timeSpent}
                    </td>
                    <td className="px-6 py-4">{item.orderValue}</td>
                    <td className="px-6 py-4 font-semibold">
                      {item.commission}
                    </td>
                    <td className="px-6 py-4 text-font-gray text-sm hover:underline cursor-pointer">
                      <div className="flex items-center gap-2">
                        View Chart <GoArrowUpRight />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                currentPage === 1 ? "text-gray-400" : "text-black"
              }`}
            >
              <FaChevronLeft />
            </button>
            <span className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-sm rounded-md ${
                currentPage === totalPages ? "text-gray-400" : "text-black"
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
