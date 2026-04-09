import Header from "@/components/header";
import ContributorItem from "@/components/contributorItem";
import contriFiles from "./data.json";


export default function Contri() {
    return (
        <div className="flex flex-col w-full h-screen bg-white dark:bg-gray-900">
            <Header name="Contributors" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {contriFiles.map((file) => (
                    <ContributorItem
                        key={file.id}
                        name={file.name}
                        link={file.link}
                    />
                ))}
            </div>
        </div>
    );
}
