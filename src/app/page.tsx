import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4">Main content of the page.</p>
      </div>
    </main>
  );
}
