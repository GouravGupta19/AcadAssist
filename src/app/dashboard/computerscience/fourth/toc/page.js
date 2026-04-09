import Header from "@/components/header";
import ListItem from "@/components/listItem";
import tocFiles from "./data.json";


export default function TOC() {
    return (
        <div className="flex flex-col w-full h-screen bg-white dark:bg-gray-900">
            <Header name="Theory of Computation" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {tocFiles.map((file) => (
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
