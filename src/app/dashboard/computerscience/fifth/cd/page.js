import Header from "@/components/header";
import ListItem from "@/components/listItem";
import cdFiles from "./data.json";


export default function CD() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Compiler Design" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {cdFiles.map((file) => (
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
