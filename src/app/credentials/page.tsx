"use client";

import { Card } from "@/components/Card";
import { Card1 } from "@/components/Card1";
import { CardForCF } from "@/components/CardForCodeForce1";
import React, { useState, useEffect } from "react";

interface GitHubUser {
  username: string;
  avatar_url: string;
  bio: string;
  followers: string;
  html_url: string;
}

interface LeetCodeUser {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
  reputation: number;
  about: string;
}

interface CFUser {
  handle: string;
  firstName: string;
  country: string;
  rank: string;
  rating: number;
  avatar: string;
}

function Page() {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser | null>(null);
  const [leetCodeUser, setLeetCodeUser] = useState<LeetCodeUser | null>(null);
  const [cfUser, setCfUser] = useState<CFUser | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const gitHubUsername = "roshan-jha-23";
  const leetCodeUsername = "roshanjha_";
  const cfHandle = "RoshanJha23";

  const fetchGitHubUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${gitHubUsername}`
      );
      if (!response.ok) {
        throw new Error("GitHub user not found");
      }
      const data: GitHubUser = await response.json();
      setGitHubUser(data);
    } catch (error) {
      console.log(
        "GitHub user not found or there was an error fetching the user."
      );
      setGitHubUser(null);
    }
  };

  const fetchLeetCodeUser = async () => {
    try {
      const response = await fetch(
        `https://alfa-leetcode-api.onrender.com/${leetCodeUsername}`
      );
      if (!response.ok) {
        throw new Error("LeetCode user not found");
      }
      const data: LeetCodeUser = await response.json();
      setLeetCodeUser(data);
    } catch (error) {
      console.log(
        "LeetCode user not found or there was an error fetching the user."
      );
      setLeetCodeUser(null);
    }
  };

  const fetchCfUser = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.info?handles=${cfHandle}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setCfUser(data.result[0]);
      } else {
        setError(data.comment);
        setCfUser(null);
      }
    } catch (error) {
      setError("Failed to fetch Codeforces user data");
      setCfUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGitHubUser();
    fetchLeetCodeUser();
    fetchCfUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 flex flex-col items-center mt-24 py-10 text-white">
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-yellow-500">User Profiles</h1>
      </div>
      <div className="flex flex-col items-center py-4">
        {loading && <p className="mt-4 text-gray-500">Loading...</p>}
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 w-full px-4">
          {gitHubUser && (
            <div className="flex flex-col h-full w-full">
              Github
              <Card
                username={gitHubUser.username}
                avatar={gitHubUser.avatar_url}
                bio={gitHubUser.bio}
                followers={gitHubUser.followers}
                url={gitHubUser.html_url}
              />
            </div>
          )}
          {leetCodeUser && (
            <div className="flex flex-col h-full w-full">
              Leetcode
              <Card1
                username={leetCodeUser.name}
                avatar={leetCodeUser.avatar}
                bio={leetCodeUser.about}
                ranking={leetCodeUser.ranking}
              />
            </div>
          )}
          {cfUser && (
            <div className="flex flex-col h-full w-full">
              CodeForce
              <CardForCF
                handle={cfUser.handle}
                firstName={cfUser.firstName}
                country={cfUser.country}
                rank={cfUser.rank}
                rating={cfUser.rating}
                avatar={cfUser.avatar}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
