"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

// Define the type for the data item
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
        const result: ApiResponse[] = await response.json();

        const formattedData: Order[] = result.map((item) => ({
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
                  <th className="px-6 py-4 text-font-gray text-sm font-medium">
                    Date
                  </th>
                  <th className="px-6 py-4 text-font-gray text-sm font-medium">
                    Time Spent
                  </th>
                  <th className="px-6 py-4 text-font-gray text-sm font-medium">
                    Order Value
                  </th>
                  <th className="px-6 py-4 text-font-gray text-sm font-medium">
                    Commission
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
