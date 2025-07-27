import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Welcome to Median</h1>
        <p className="text-lg mb-4">
          This is a simple home page using our custom layout with header and footer components.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Featured Content</h2>
          <p>
            Explore our website to learn more about our applications, team, and services.
          </p>
        </div>
      </div>
    </Layout>
  );
}