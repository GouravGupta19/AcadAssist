import Header from "@/components/header";
import ListItem from "@/components/listItem";
import esFiles from "./data.json";


export default function ES() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Embedded Systems" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {esFiles.map((file) => (
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
