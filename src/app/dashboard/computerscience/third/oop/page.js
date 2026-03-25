import Header from "@/components/header";
import ListItem from "@/components/listItem";
import oopFiles from "./data.json";


export default function OOP() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Object Oriented Programming" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {oopFiles.map((file) => (
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
