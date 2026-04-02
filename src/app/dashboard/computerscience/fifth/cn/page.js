import Header from "@/components/header";
import ListItem from "@/components/listItem";
import cnFiles from "./data.json";


export default function CN() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Computer Networks" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {cnFiles.map((file) => (
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
