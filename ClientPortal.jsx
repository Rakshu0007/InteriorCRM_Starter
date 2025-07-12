import React from "react";
import { useParams } from "react-router-dom";

export default function ClientPortal() {
  const { projectId } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Client Portal</h2>
      <p>Client view for project: {projectId}</p>
    </div>
  );
}