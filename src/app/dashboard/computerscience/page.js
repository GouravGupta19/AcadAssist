import Header from "@/components/header";
import Card from "@/components/card";

export default function ComputerScience() {
  return (
    <div className="w-screen min-h-screen bg-gray-200 dark:bg-gray-900">
      <Header name="Select your Semester" />

      <div className="grid grid-cols-4 gap-6 p-6">
        <Card name="3rd Semester" href="/dashboard/computerscience/third" />
        <Card name="4th Semester" href="/dashboard/computerscience/fourth" />
        <Card name="5th Semester" href="/dashboard/computerscience/fifth" />
        <Card name="6th Semester" href="/dashboard/computerscience/sixth" />
        <Card name="7th Semester" href="/dashboard/computerscience/seventh" />
        <Card name="8th Semester" href="/dashboard/computerscience/eighth" />
      </div>
    </div>
  );
}