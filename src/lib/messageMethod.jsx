import React, { useEffect, useState } from "react";
import axios from "axios";

const MessageFetcher = () => {
  const [message, setMessage] = useState(""); // Variable to store the message
  const API_URL = "/messages?sender=&receiver="; // Replace with your API URL

  // Fetch message from API
  const fetchMessage = async () => {
    try {
      const response = await axios.get(API_URL);
      const fetchedMessage = response.data.text; // Assuming API returns { text: "Hello World" }

      setMessage(fetchedMessage); // Store message in state
      console.log("Fetched Message:", fetchedMessage); // Print message to console
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  useEffect(() => {
    fetchMessage(); // Fetch message when component mounts
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Fetched Message</h2>
      <p className="p-2 border rounded mb-4">{message || "Loading..."}</p>

      <button
        onClick={fetchMessage}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Refresh Message
      </button>
    </div>
  );
};

export default MessageFetcher;
