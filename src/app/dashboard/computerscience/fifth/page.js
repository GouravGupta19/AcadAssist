import Header from "@/components/header";
import Card from "@/components/card";

export default function FifthSemesterComputerScience() {
    return (
        <div className="w-screen min-h-screen bg-gray-200">
            <Header name="Select your Course" />

            <div className="grid grid-cols-4 gap-6 p-6">
                <Card name="Computer Networks" href="/dashboard/computerscience/fifth/cn" />
                <Card name="Compiler Design" href="/dashboard/computerscience/fifth/cd" />
                <Card name="Embedded Systems" href="/dashboard/computerscience/fifth/es" />
                <Card name="Design & Analysis of Algorithms II" href="/dashboard/computerscience/fifth/daa2" />
            </div>
        </div>
    );
}