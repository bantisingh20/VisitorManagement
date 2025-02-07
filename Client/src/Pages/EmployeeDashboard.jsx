import React, { useState } from "react";
import DataTable from "react-data-table-component";

const EmployeeDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const visitors = [
    { id: 1, name: "John Doe", status: "Checked-in", meetingStatus: "Ended", from: "Company A", purpose: "Meeting", date: "2025-02-07", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Jane Smith", status: "Checked-in", meetingStatus: "Ongoing", from: "Company B", purpose: "Interview", date: "2025-02-07", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Alice Johnson", status: "Checked-in", meetingStatus: "Ended", from: "Company C", purpose: "Business", date: "2025-02-06", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 4, name: "Bob Brown", status: "Checked-in", meetingStatus: "Ended", from: "Company D", purpose: "Consultation", date: "2025-02-05", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 5, name: "Emily Davis", status: "Checked-in", meetingStatus: "Ongoing", from: "Company E", purpose: "Sales", date: "2025-02-04", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
    { id: 6, name: "Frank White", status: "Checked-in", meetingStatus: "Ended", from: "Company F", purpose: "Technical Support", date: "2025-02-03", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
    { id: 7, name: "Grace Lee", status: "Checked-in", meetingStatus: "Ended", from: "Company G", purpose: "Consulting", date: "2025-02-02", avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
    { id: 8, name: "Henry King", status: "Checked-in", meetingStatus: "Ongoing", from: "Company H", purpose: "Training", date: "2025-02-01", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
    { id: 9, name: "Isabella Wright", status: "Checked-in", meetingStatus: "Ended", from: "Company I", purpose: "Workshop", date: "2025-01-31", avatar: "https://randomuser.me/api/portraits/women/9.jpg" },
    { id: 10, name: "Jack Scott", status: "Checked-in", meetingStatus: "Ended", from: "Company J", purpose: "Partnership", date: "2025-01-30", avatar: "https://randomuser.me/api/portraits/men/10.jpg" }
  ];

  const filteredVisitors = visitors.filter(visitor => 
    visitor.status === "Checked-in" && visitor.meetingStatus === "Ended" && 
    (visitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visitor.from.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-blue-50 p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Employee Dashboard</h2>
      <input
        type="text"
        placeholder="Search by name or company..."
        className="border p-2 rounded-md w-full md:w-1/3 mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredVisitors.map((visitor) => (
          <div key={visitor.id} className="p-5 bg-white shadow-lg rounded-xl border border-gray-200 flex items-center gap-4">
            <div>
               
              <img src={visitor.avatar} alt={visitor.name} className="w-16 h-16 rounded-full" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800">{visitor.name}</h3>
              
              <p className="text-sm text-gray-500">Coming from: {visitor.from}</p>
              <p><strong>Purpose:</strong> {visitor.purpose}</p>
              <p><strong>Date:</strong> {visitor.date}</p>
            </div>


            
          </div>

          
        ))}
      </div>
    </div>
  );
};

export { EmployeeDashboard };






{/*
  
  
  <span 
                className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
                  visitor.status === "Pending" ? "bg-yellow-500" : visitor.status === "Checked-in" ? "bg-green-500" : "bg-gray-500"
                }`}
              >
                {visitor.status}
              </span>
              
              <div className="mt-3">
              {visitor.status === "Checked-in" && (
                <button 
                  onClick={() => handleUpdateMeetingStatus(visitor.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  End Meeting
                </button>
              )}
            </div> */}