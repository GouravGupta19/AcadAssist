import Header from "@/components/header";
import ListItem from "@/components/listItem";
import math3Files from "./data.json";


export default function Math3() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Mathematics III" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {math3Files.map((file) => (
                    <ListItem
                        key={file.id}
                        name={file.name}
                        link={file.link}
                    />
                ))}
            </div>
        </div>
    );
}
