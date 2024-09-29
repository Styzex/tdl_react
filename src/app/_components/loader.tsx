"use client";

import { useState, useEffect } from "react";
import {} from "ldrs";
import "ldrs/zoomies";

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Simulate a delay for demonstration purposes
  }, []);

  if (!isLoaded) return null; // Hide the loader while not loaded

  return (
    <l-zoomies
      size="80"
      stroke="5"
      bg-opacity="0.1"
      speed="1.4"
      color="black"
    ></l-zoomies>
  );
}
