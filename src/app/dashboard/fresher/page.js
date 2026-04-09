import Header from "@/components/header";
import Card from "@/components/card";

export default function Freshers() {
  return (
    <div className="w-screen min-h-screen bg-gray-200 dark:bg-gray-900">
      <Header name="Select your Semester" />

      <div className="grid grid-cols-4 gap-6 p-6">
        <Card name="1st Semester" href="/dashboard/fresher/first" />
        <Card name="2nd Semester" href="/dashboard/fresher/second" />
      </div>
    </div>
  );
}