import Header from "@/components/header";
import Card from "@/components/card";

export default function Dashboard() {
  return (
    <div className="relative w-screen min-h-screen bg-gray-200">
      <Header name="Select your Department" />

      <div className="grid grid-cols-4 gap-6 p-6">
        <Card name="Freshers" href="/dashboard/fresher" />
        <Card name="Computer Science" href="/dashboard/computerscience" />
        <Card name="Electrical" href="/dashboard/electrical" />
        <Card name="Electronics and Communication" href="/dashboard/electronics" />
        <Card name="Civil" href="/dashboard/civil" />
        <Card name="Mechanical" href="/dashboard/mechanical" />
        <Card name="Chemical" href="/dashboard/chemical" /> 
        <Card name="Metallurgy" href="/dashboard/metallurgy" />
      </div>

    </div>
  );
}