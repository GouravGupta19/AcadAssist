import Header from "@/components/header";
import Card from "@/components/card";


export default function ThirdSemesterComputerScience() {
    return (
        <div className="w-screen min-h-screen bg-gray-200">
            <Header name="Select your Course" />

            <div className="grid grid-cols-4 gap-6 p-6">
                <Card name="Object Oriented Programming" href="/dashboard/computerscience/third/oop" />
                <Card name="Design & Analysis of Algorithms" href="/dashboard/computerscience/third/daa" />
                <Card name="Discrete Mathematics" href="/dashboard/computerscience/third/dm" />
                <Card name="Digital Logic Design" href="/dashboard/computerscience/third/dld" />
                <Card name="Mathematics III" href="/dashboard/computerscience/third/math3" />
            </div>
        </div>
    );
}
