import React, { useState, useEffect } from "react";
import Highlighter from "react-highlight-words";

function HelpCenter() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({ title: "", description: "" });

  // Fetching the cards data from the server
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
    if (e.key === "Enter" || e.type === "click") {
      fetchSearchResults();
    }
  };

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/cards/${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCard = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCard),
      });
      const responseData = await response.json();

      if (responseData && responseData.data) {
        const newCardData = responseData.data;
        setData((prevData) => [...prevData, newCardData]);
        setShowModal(false);
        setNewCard({ title: "", description: "" });
      } else {
        console.error("Invalid response data");
      }
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-black w-full flex justify-around items-center text-white p-4">
        <div>
          <h3>Abstract | Help Center</h3>
        </div>
        <button className="px-2 py-1 rounded-md border border-gray-700 bg-slate-900">
          Submit a request
        </button>
        <button
          className="px-2 py-1 rounded-md border border-gray-700 bg-slate-900"
          onClick={() => setShowModal(true)}
        >
          Add a help Service
        </button>
      </div>
      <div className="bg-gray-200 p-24 w-full">
        <h1 className="text-4xl font-bold text-center">How can we help?</h1>

        <div className="w-full max-w-md mt-8 flex m-auto">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={handleSearch}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {searchResults.map((card) => (
              <li key={card._id}>{card.title}</li>
            ))}
          </ul>
        )}
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

      {/* Modal for adding a new card */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl mb-4">Add a New Help Service</h2>
            <input
              type="text"
              placeholder="Title"
              value={newCard.title}
              onChange={(e) =>
                setNewCard({ ...newCard, title: e.target.value })
              }
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm"
            />
            <input
              placeholder="Description"
              value={newCard.description}
              onChange={(e) =>
                setNewCard({ ...newCard, description: e.target.value })
              }
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm"
            />
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => {
                  handleAddCard();
                  setShowModal(false);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpCenter;
