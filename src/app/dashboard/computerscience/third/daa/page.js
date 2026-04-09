import Header from "@/components/header";
import ListItem from "@/components/listItem";
import daaFiles from "./data.json";


export default function DAA() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Design & Analysis of Algorithms" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {daaFiles.map((file) => (
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
