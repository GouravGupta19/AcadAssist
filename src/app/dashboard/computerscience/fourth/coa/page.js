import Header from "@/components/header";
import ListItem from "@/components/listItem";
import coaFiles from "./data.json";


export default function COA() {
    return (
        <div className="flex flex-col w-full h-screen bg-white dark:bg-gray-900">
            <Header name="Computer Organization & Architecture" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {coaFiles.map((file) => (
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
