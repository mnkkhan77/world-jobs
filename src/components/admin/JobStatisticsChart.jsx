import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function JobStatisticsChart({ jobPosts }) {
  const chartData = jobPosts.map((job) => ({
    name: job.title,
    applications: job.applications,
    searches: job.searches,
    views: job.views,
  }));

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
          Job Post Statistics
        </h3>
        <div style={{ height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applications" fill="#8884d8" />
              <Bar dataKey="searches" fill="#82ca9d" />
              <Bar dataKey="views" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
