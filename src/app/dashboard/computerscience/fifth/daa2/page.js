import Header from "@/components/header";
import ListItem from "@/components/listItem";
import daa2Files from "./data.json";


export default function DAA2() {
    return (
        <div className="flex flex-col w-full h-screen bg-white">
            <Header name="Design & Analysis of Algorithms II" />

            <div className="flex flex-col w-full flex-1 overflow-y-auto">
                {daa2Files.map((file) => (
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
