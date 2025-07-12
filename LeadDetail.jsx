import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";

export default function LeadDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Lead: {id}</h2>
      <nav className="mb-4 space-x-4">
        <Link to="overview">Overview</Link>
        <Link to="project">Project Details</Link>
        <Link to="quotations">Quotations</Link>
        <Link to="documents">Documents</Link>
        <Link to="payments">Payments</Link>
        <Link to="orders">Orders</Link>
      </nav>

      <Routes>
        <Route path="overview" element={<div>Stage, chat, reminders.</div>} />
        <Route path="project" element={<div>Property details, scope of work.</div>} />
        <Route path="quotations" element={<div>Dynamic BOQ here.</div>} />
        <Route path="documents" element={<div>Upload/download project docs.</div>} />
        <Route path="payments" element={<div>Payment status, Razorpay integration.</div>} />
        <Route path="orders" element={<div>Product & vendor orders.</div>} />
      </Routes>
    </div>
  );
}