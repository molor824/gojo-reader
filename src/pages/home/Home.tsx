import Monopo from "./Monopo";

export const Home = () => {
  return (
    <main>
      <Monopo />

      {/* Recent Work Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project cards will go here */}
        </div>
      </section>
    </main>
  );
};
