import Header from "@/components/header";
import ListItem from "@/components/listItem";
import dbmsFiles from "./data.json";


export default function DBMS() {
    return (
        <div className="flex flex-col w-full h-screen bg-white dark:bg-gray-900">
            <Header name="Database Management System" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {dbmsFiles.map((file) => (
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
