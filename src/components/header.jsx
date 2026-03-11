
export default function Header({ name }) {

  return (
    <div className="relative h-[20vh] w-full flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg text-center px-28">
        {name}
      </h1>

    </div>
  );
}