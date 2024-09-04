"use client";
import { searchSongs } from "@/lib/spotify";
import React, { useState } from "react";

const RequestPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[] | undefined>([]);
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const songs = await searchSongs(query);
      setResults(songs);
    } catch (error) {
      console.error("Error searching songs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRequest = async (song: any) => {
    setRequestStatus("pending");
    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          songId: song.id,
          songName: song.name,
          artistName: song.artists.map((artist: any) => artist.name).join(", "),
          albumName: song.album.name || "",
          requestedBy: "Anonymous",
          requestedAt: Date.now().toString(),
        }),
      });

      if (response.ok) {
        setRequestStatus("success");
      } else {
        const errorData = await response.json();
        console.error("Error adding song request:", errorData);
        setRequestStatus("error");
      }
    } catch (error) {
      console.error("Error adding song request", error);
      setRequestStatus("error");
    }
  };

  return (
    <div>
      <h1>Request a Song</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a song"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {requestStatus === "success" && <p>Song request added successfully!</p>}
      {requestStatus === "error" && <p>Failed to add song request.</p>}
      <ul>
        {results?.map((song) => (
          <li key={song.id}>
            <p>
              <strong>{song.name}</strong> by{" "}
              {song.artists.map((artists: any) => artists.name).join(", ")}
              <button
                onClick={() => {
                  console.log(song);
                  handleRequest(song);
                }}
              >
                Request
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestPage;
