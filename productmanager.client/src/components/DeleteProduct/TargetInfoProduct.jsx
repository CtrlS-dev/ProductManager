import React from "react";
import TargetElementInfo from "./TargetElementInfo";

export default function TargetInfoProduct({ children }) {
  return (
    <div className="mx-auto fixed inset-0 h-full w-full flex items-center bg-black/30 backdrop-blur-sm animate__fadeIn animate__fast animate__animated">
      <form className="space-y-4 bg-red-300 p-6 rounded-lg shadow-md max-w-2xl mx-auto"></form>
    </div>
  );
}
