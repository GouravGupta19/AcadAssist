"use client";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-100 cursor-pointer"
    >
      
      <h1 className="text-6xl font-extrabold text-gray-800 mb-6">
        Coming Soon 🚀
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Click anywhere to go back
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6 hover:bg-gray-200 transition">
        <p className="text-lg text-gray-700">
          Stay tuned for updates!
        </p>
      </div>

    </div>
  );
}