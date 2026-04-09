import Link from "next/link";

export default function Card({ name, href }) {
  return (
    <Link href={href}>
      <div className="w-[23vw] h-[25vh] bg-blue-100 dark:bg-blue-900 dark:text-blue-100 shadow-lg rounded-xl flex items-center justify-center text-xl font-semibold hover:scale-105 transition cursor-pointer">
        {name}
      </div>
    </Link>
  );
}