import Link from "next/link";
import { SetStateAction, useEffect, useRef, useState } from "react";

const categories = [
  { label: "Select Category", value: "all" },
  { label: "CPU / Processor", value: "cpu_or_processor" },
  { label: "Motherboard", value: "motherboard" },
  { label: "RAM", value: "ram" },
  { label: "Power Supply Unit", value: "power_supply_unit" },
  { label: "Storage Device", value: "storage_device" },
  { label: "Monitor", value: "monitor" },
  { label: "Others", value: "others" },
];

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Select Category");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-[190px]" ref={dropdownRef}>
      <div
        className="bg-gray-800 text-white rounded-lg p-2 pl-3 pr-4 flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{selectedCategory}</span>
        <svg
          className={`w-4 h-4 ml-auto transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3.293 4.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-full bg-gray-800 text-white rounded-lg shadow-lg">
          {categories.map(({ label, value }) => (
            <Link
              href={`/products/${value}`}
              key={value}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer block"
              onClick={() => handleItemClick(label)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
