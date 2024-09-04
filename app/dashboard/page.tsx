"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface SongRequest {
  id: string;
  songId: string;
  songName: string;
  artistName: string;
  albumName: string;
  requestedBy: string;
  requestedAt: string;
  createdAt: string;
  played: boolean;
}

const DashboardPage = () => {
  const [requests, setRequests] = useState<SongRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem("DJ_TOKEN");
        if (!token) {
          router.push("/login");
          return;
        }

        const res = await fetch("/api/requests", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          router.push("/login");
          return;
        }

        const data: SongRequest[] = await res.json();
        setRequests(data);
      } catch (err) {
        console.error("Failed to fetch song requests: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [router]);

  const markAsPlayed = async (id: string) => {
    const token = localStorage.getItem("DJ_TOKEN");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("/api/requests", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, played: true }),
      });

      if (res.ok) {
        setRequests((prev) =>
          prev.map((req) => (req.id === id ? { ...req, played: true } : req))
        );
      } else {
        console.error("Failed to mark as played");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Song Requests Dashboard</h1>
      {requests.length === 0 ? (
        <p>No song requests yet</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Song Name</th>
              <th className="py-2">Artist</th>
              <th className="py-2">Requested At</th>
              <th className="py-2">Requested By</th>
              <th className="py-2">Played</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.songId} className="text-center">
                <td className="py-2">{req.songId}</td>
                <td className="py-2">{req.songName}</td>
                <td className="py-2">{req.artistName}</td>
                <td className="py-2">
                  {new Date(req.requestedAt).toLocaleString()}
                </td>
                <td className="py-2">{req.played ? "Yes" : "No"}</td>
                <td className="py-2">
                  {!req.played && (
                    <button
                      onClick={() => markAsPlayed(req.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Mark as PLayed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DashboardPage;
