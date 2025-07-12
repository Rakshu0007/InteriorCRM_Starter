import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">InteriorCRM</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/workspace" className="hover:underline">Workspace</Link>
        <Link to="/employees" className="hover:underline">Employees</Link>
        <Link to="/attendance" className="hover:underline">Attendance</Link>
        <Link to="/reimbursements" className="hover:underline">Reimbursements</Link>
        <Link to="/catalogue" className="hover:underline">Catalogue</Link>
      </div>
    </nav>
  );
}