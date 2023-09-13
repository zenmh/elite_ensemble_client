import { FC, ChangeEvent, useState } from "react";

const categories: string[] = [
  "Select Category",
  "CPU / Processor",
  "Motherboard",
  "RAM",
  "Power Supply Unit",
  "Storage Device",
  "Monitor",
  "Others",
];

const Dropdown: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="my-4">
      <select
        className="border border-fuchsia-400 p-2 rounded-md w-full bg-gray-800 text-white"
        onChange={handleCategoryChange}
        value={selectedCategory}
      >
        {categories.map((category, i) => (
          <option key={i} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
