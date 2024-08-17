import React, { useState, useEffect } from "react";
import Highlighter from "react-highlight-words";

function HelpCenter() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cards")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const filteredCards = data.filter((item) => {
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();

      return (
        title.includes(searchTermLower) || description.includes(searchTermLower)
      );
    });

    setFilteredData(filteredCards);
  }, [searchTerm, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-black w-full flex justify-around items-center text-white p-4">
        <div>
          <h3>Abstrack | Help Center</h3>
        </div>
        <button className="px-2 py-1 rounded-md border border-gray-700 bg-slate-900">
          Submit a request
        </button>
      </div>
      <div className="bg-gray-200 p-24 w-full ">
        <h1 className="text-4xl font-bold text-center">How can we help?</h1>

        <div className="w-full max-w-md mt-8 flex m-auto">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => console.log("Icon clicked!")}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 px-4 max-w-5xl">
        {filteredData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">
              <Highlighter
                highlightClassName="highlight"
                searchWords={[searchTerm]}
                autoEscape={true}
                textToHighlight={item.title}
              />
            </h2>
            <p className="mt-2 text-gray-600">
              <Highlighter
                highlightClassName="highlight"
                searchWords={[searchTerm]}
                autoEscape={true}
                textToHighlight={item.description}
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpCenter;
