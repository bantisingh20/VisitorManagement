import React, { useState } from "react";
import DataTable from "react-data-table-component";

const ReceptionistDashboard = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [purposeFilter, setPurposeFilter] = useState("All");

  const visitors = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Visitor ${i + 1}`,
    status: "Checked-in",
    meetingStatus: "Ended",
    from: `Company ${String.fromCharCode(65 + (i % 10))}`,
    purpose: "Business",
    date: `2025-02-${String(i % 28 + 1).padStart(2, "0")}`,
    avatar: `https://randomuser.me/api/portraits/men/${(i % 10) + 1}.jpg`,
  }));

  const handleCheckIn = (id) => {
    setVisitors(
      visitors.map((visitor) =>
        visitor.id === id ? { ...visitor, status: "Checked-in" } : visitor
      )
    );
  };

  const handleCheckOut = (id) => {
    setVisitors(
      visitors.map((visitor) =>
        visitor.id === id ? { ...visitor, status: "Checked-out" } : visitor
      )
    );
  };

  const filteredVisitors = visitors.filter(visitor =>
    (statusFilter === "All" || visitor.status === statusFilter) &&
    (purposeFilter === "All" || visitor.purpose === purposeFilter) &&
    (visitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visitor.from.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-blue-50 p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Receptionist Dashboard</h2>
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Visitors - All the visitors that are currently on the premises</h3>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or company..."
          className="border p-2 rounded-md w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded-md w-full md:w-1/5"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Checked-in">Checked-in</option>
          <option value="Checked-out">Checked-out</option>
        </select>
        <select
          className="border p-2 rounded-md w-full md:w-1/5"
          value={purposeFilter}
          onChange={(e) => setPurposeFilter(e.target.value)}
        >
          <option value="All">All Purposes</option>
          <option value="Meeting">Meeting</option>
          <option value="Interview">Interview</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredVisitors.filter(v => v.status !== "Checked-out").map((visitor) => (
          <div key={visitor.id} className="p-5 bg-white shadow-lg rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{visitor.name}</h3>
                <p className="text-sm text-gray-500">Coming from: {visitor.from}</p>
              </div>
              <span 
                className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
                  visitor.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
                }`}
              >
                {visitor.status}
              </span>
            </div>
            
            <p><strong>Host:</strong> {visitor.host || "Not assigned"}</p>
            <p><strong>Purpose:</strong> {visitor.purpose}</p>
            <p><strong>Date:</strong> {visitor.date}</p>
            <div className="mt-3 flex gap-2">
              {visitor.host && visitor.status === "Pending" && (
                <button 
                  onClick={() => handleCheckIn(visitor.id)} 
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Check-in
                </button>
              )}
              {visitor.status === "Checked-in" && (
                <button 
                  onClick={() => handleCheckOut(visitor.id)} 
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                >
                  Check-out
                </button>
              )}
              {!visitor.host && (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Assign Host</button>
              )}
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">Edit</button>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6">All Visitors</h3>
      <DataTable 
        columns={[
          { name: "Sr.No", selector: (row,index) => (index+1) , sortable: true },
          { name: "Name", selector: row => row.name, sortable: true },
          { name: "Status", selector: row => row.status, sortable: true },
          { name: "Coming From", selector: row => row.from },
          { name: "Host", selector: row => row.host || "Not assigned" },
          { name: "Purpose", selector: row => row.purpose },
          { name: "Date", selector: row => row.date }
        ]} 
        data={filteredVisitors} 
        pagination
        highlightOnHover
        className="mt-4 bg-white shadow-lg p-4 rounded-xl"
      />
    </div>
  );
};

export { ReceptionistDashboard };
