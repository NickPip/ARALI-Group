"use client";

import React, { useEffect, useState } from "react";

const TestConnection: React.FC = () => {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/test")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.text();
      })
      .then((text) => setData(text))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "1rem", background: "#f0f0f0", margin: "1rem 0" }}>
      <h3>Backend Connection Test</h3>
      {error ? (
        <span style={{ color: "red" }}>Error: {error}</span>
      ) : (
        <span>Response: {data || "Loading..."}</span>
      )}
    </div>
  );
};

export default TestConnection;
