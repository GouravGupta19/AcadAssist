import Header from "@/components/header";
import ListItem from "@/components/listItem";
import dmFiles from "./data.json";


export default function DM() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Discrete Mathematics" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {dmFiles.map((file) => (
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
