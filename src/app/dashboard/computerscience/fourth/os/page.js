import Header from "@/components/header";
import ListItem from "@/components/listItem";
import osFiles from "./data.json";


export default function OS() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Operating System" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {osFiles.map((file) => (
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
