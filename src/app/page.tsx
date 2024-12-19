import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Click{" "}
        <Link href="documents/123" className="text-blue-500 underline">
          Here
        </Link>{" "}
        to go to the document.
      </h1>
    </div>
  );
};

export default Home;
