import Header from "@/components/header";
import ListItem from "@/components/listItem";
import dldFiles from "./data.json";


export default function DLD() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Digital Logic Design" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {dldFiles.map((file) => (
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
