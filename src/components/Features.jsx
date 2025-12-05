import React from "react";
import {
  PackageMinus,
  RefreshCw,
  Cloud,
  Send,
  Users,
  Code,
} from "lucide-react";

const tools = [
  { id: 1, title: "File Compression", icon: PackageMinus, color: "#6A5BFF" },
  { id: 2, title: "Cloud Conversion", icon: RefreshCw, color: "#8F5AFF" },
  { id: 3, title: "Cloud Storage", icon: Cloud, color: "#00C2A8" },
  { id: 4, title: "Secure Transfer", icon: Send, color: "#0094FF" },
  { id: 5, title: "Business Workspace", icon: Users, color: "#FF6EB2" },
  { id: 6, title: "Automation API", icon: Code, color: "#00C2A8" },
];

const Features = () => {
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h1 className="text-4xl font-bold mb-3">
          Smart Cloud Tools for Your Workflow
        </h1>

        <p className="text-gray-500 mb-16 text-lg">
          A modern suite of fast & reliable cloud utilities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ToolCard = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6 flex flex-col items-center hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
     
      <Icon size={34} strokeWidth={1.5} style={{ color: tool.color }} />

      <p className="mt-4 text-gray-800 font-medium text-sm">
        {tool.title}
      </p>
    </div>
  );
};

export default Features