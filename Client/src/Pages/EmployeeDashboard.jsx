import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Chip,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from "@mui/material";

const EmployeeDashboard = () => {
  const [view, setView] = useState("table");
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
   

  const visitors = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Visitor ${i + 1}`,
    status: "Checked-in",
    meetingStatus: "Ended",
    from: `Company ${String.fromCharCode(65 + (i % 10))}`,
    purpose: "Business",
    date: `2025-02-${String(i % 28 + 1).padStart(2, "0")}`,
    avatar: `https://randomuser.me/api/portraits/men/${(i % 10) + 1}.jpg`,
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
    
      <Typography 
        variant="h4" 
        color="primary" 
        className="mb-6 font-bold" 
        style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
      >
        Welcome, Employee! 👋
      </Typography>

      <Typography 
        variant="subtitle1" 
        color="textSecondary" 
        className="mb-6 text-center" 
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Here’s a list of visitors who are currently checked in and meeting with you.
      </Typography>


      {/* View Toggle */}
      <div className="mb-4 flex justify-between">
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(e, newView) => setView(newView)}
        >
          <ToggleButton value="card">Card View</ToggleButton>
          <ToggleButton value="table">Table View</ToggleButton>
        </ToggleButtonGroup>

        <Button variant="contained" color="primary">
          Apply Filters
        </Button>
      </div>

      {view === "card" ? (
        <Grid container spacing={3}>
          {visitors.map((visitor) => (
            <Grid item xs={12} sm={6} md={3} key={visitor.id}>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="flex items-center gap-4">
                  <Avatar src={visitor.avatar} alt={visitor.name} sx={{ width: 60, height: 60 }} />
                  <div>
                    <Typography variant="h6" className="font-semibold">{visitor.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      From: {visitor.from}
                    </Typography>
                    <Typography variant="body2"><strong>Purpose:</strong> {visitor.purpose}</Typography>
                    <Typography variant="body2"><strong>Date:</strong> {visitor.date}</Typography>
                    <Chip
                      label={visitor.status}
                      color="success"
                      size="small"
                      className="mt-2"
                    />
                  </div>
                </CardContent>
                <Button variant="contained" color="secondary" fullWidth>
                  End Meeting
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>From</TableCell>
              <TableCell>Purpose</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visitors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((visitor) => (
              <TableRow key={visitor.id}>
                <TableCell>
                  <Avatar src={visitor.avatar} alt={visitor.name} />
                </TableCell>
                <TableCell>{visitor.name}</TableCell>
                <TableCell>{visitor.from}</TableCell>
                <TableCell>{visitor.purpose}</TableCell>
                <TableCell>{visitor.date}</TableCell>
                <TableCell>
                  <Chip label={visitor.status} color="success" size="small" />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary">
                    End Meeting
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={visitors.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </TableContainer>
      )}
    </div>
  );
};

export { EmployeeDashboard };

// import { useState } from "react";
// import Filter from "../CommonComponents/Filter";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
//   TablePagination, Button, Grid, Card, CardContent, Avatar, Typography,
//   ToggleButton, ToggleButtonGroup, Chip
// } from "@mui/material";

// const EmployeeDashboard = () => {
//   const [open, setOpen] = useState(false);
//   const [view, setView] = useState("table");
//   const [page, setPage] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(10);
//   const rowsPerPage = 10;

//   const visitors = Array.from({ length: 50 }, (_, i) => ({
//     id: i + 1,
//     name: `Visitor ${i + 1}`,
//     status: "Checked-in",
//     meetingStatus: "Ended",
//     from: `Company ${String.fromCharCode(65 + (i % 10))}`,
//     purpose: "Business",
//     date: `2025-02-${String(i % 28 + 1).padStart(2, "0")}`,
//     avatar: `https://randomuser.me/api/portraits/men/${(i % 10) + 1}.jpg`,
//   }));

//   const handleChangePage = (event, newPage) => setPage(newPage);
//   const handleLoadMore = () => setVisibleCards((prev) => prev + 10);

//   const handleApplyFilters = (filters) => {
//     console.log("Applied Filters:", filters);
//   };

//   return (
//     <div className="p-6 min-h-screen" style={{ background: "linear-gradient(to right, #E3F2FD, #EDE7F6)" }}>
//       <Typography variant="h4" color="primary" className="mb-6 font-bold" style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
//         Welcome, Employee! 👋
//       </Typography>

//       <Typography variant="subtitle1" color="textSecondary" className="mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
//         Here’s a list of visitors who are currently checked in and meeting with you.
//       </Typography>

//       {/* View Toggle */}
//       <div className="mb-4 flex justify-between items-center">
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(e, newView) => setView(newView)}
//           style={{ border: "2px solid #5C6BC0", borderRadius: "8px", padding: "5px" }}
//         >
//           <ToggleButton value="card" style={{ color: view === "card" ? "#fff" : "#5C6BC0", background: view === "card" ? "#5C6BC0" : "transparent" }}>
//             Card View
//           </ToggleButton>
//           <ToggleButton value="table" style={{ color: view === "table" ? "#fff" : "#5C6BC0", background: view === "table" ? "#5C6BC0" : "transparent" }}>
//             Table View
//           </ToggleButton>
//         </ToggleButtonGroup>
        
//         <Button variant="contained" onClick={() => setOpen(true)} color="primary" size="small" style={{ fontSize: "12px", padding: "6px 12px" }}>
//           Apply Filters
//         </Button>
//         <Filter open={open} onClose={() => setOpen(false)} onApply={handleApplyFilters} />
//       </div>

//       {view === "card" ? (
//         <>
//           <Grid container spacing={3}>
//             {visitors.slice(0, visibleCards).map((visitor) => (
//               <Grid item xs={12} sm={6} md={3} key={visitor.id}>
//                 <Card
//                   className="shadow-md hover:shadow-xl transition-all duration-300"
//                   style={{
//                     borderRadius: "10px",
//                     background: "#F5F5F5",  // Light Grey Background
//                     color: "black",
//                     padding: "10px",
//                     transition: "transform 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
//                   onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
//                 >
//                   <CardContent className="flex items-center gap-4">
//                     <Avatar src={visitor.avatar} alt={visitor.name} sx={{ width: 60, height: 60, border: "2px solid #5C6BC0" }} />
//                     <div>
//                       <Typography variant="h6" className="font-semibold">{visitor.name}</Typography>
//                       <Typography variant="body2">From: {visitor.from}</Typography>
//                       <Typography variant="body2"><strong>Purpose:</strong> {visitor.purpose}</Typography>
//                       <Typography variant="body2"><strong>Date:</strong> {visitor.date}</Typography>
//                       <span 
//                           className={`mt-2 px-3 py-1 text-sm font-semibold rounded-full text-white ${
//                             visitor.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
//                           }`}
//                         >
//                           {visitor.status}
//                         </span>
//                       {/* <Chip label={visitor.status} style={{ background: "linear-gradient(to right, #64B5F6, #7986CB)", color: "white" }} size="small" className="mt-2" /> */}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//           {visibleCards < visitors.length && (
//             <div className="text-center mt-6">
//               <Button variant="outlined" onClick={handleLoadMore}>
//                 Load More
//               </Button>
//             </div>
//           )}
//         </>
//       ) : (
//         <TableContainer component={Paper} style={{ borderRadius: "10px", overflow: "hidden" }}>
//           <Table>
//             <TableHead>
//               <TableRow style={{ backgroundColor: "#3949AB" }}>
//                 {["Avatar", "Name", "From", "Purpose", "Date", "Status", "Action"].map((heading) => (
//                   <TableCell key={heading} style={{ fontWeight: "bold", color: "white" }}>{heading}</TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {visitors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((visitor, index) => (
//                 <TableRow key={visitor.id} style={{ backgroundColor: index % 2 === 0 ? "#E3F2FD" : "#EDE7F6" }}>
//                   <TableCell><Avatar src={visitor.avatar} alt={visitor.name} /></TableCell>
//                   <TableCell>{visitor.name}</TableCell>
//                   <TableCell>{visitor.from}</TableCell>
//                   <TableCell>{visitor.purpose}</TableCell>
//                   <TableCell>{visitor.date}</TableCell>
//                   <TableCell>
//                     <Chip label={visitor.status} style={{ background: "linear-gradient(to right, #64B5F6, #7986CB)", color: "white" }} size="small" />
//                   </TableCell>
//                   <TableCell>
//                     <Button variant="contained" style={{ backgroundColor: "#424242", color: "#fff", cursor: "not-allowed" }}>
//                       End Meeting
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <TablePagination rowsPerPageOptions={[10]} component="div" count={visitors.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} />
//         </TableContainer>
//       )}
//     </div>
//   );
// };

// //export default EmployeeDashboard;


// export  {EmployeeDashboard};
