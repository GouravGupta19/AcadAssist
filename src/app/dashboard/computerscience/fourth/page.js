import Header from "@/components/header";
import Card from "@/components/card";


export default function FourthSemesterComputerScience() {
    return (
        <div className="w-screen min-h-screen bg-gray-200 dark:bg-gray-900">
            <Header name="Select your Course" />

            <div className="grid grid-cols-4 gap-6 p-6">
                <Card name="Theory of Computation" href="/dashboard/computerscience/fourth/toc" />
                <Card name="Database Management System" href="/dashboard/computerscience/fourth/dbms" />
                <Card name="Operating System" href="/dashboard/computerscience/fourth/os" />
                <Card name="Computer Organization & Architecture" href="/dashboard/computerscience/fourth/coa" />
            </div>
        </div>
    );
}
