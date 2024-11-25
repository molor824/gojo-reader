export const Home = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="min-h-screen px-6 flex flex-col justify-center max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
          We are a brand of collective creativity
        </h1>
        <div className="space-y-4 text-xl">
          <p className="flex gap-4">
            <span className="font-bold">Based in London</span>
            <span className="text-gray-400">Born in Tokyo</span>
          </p>
          <p className="flex gap-4">
            <span className="font-bold">Design-driven</span>
            <span className="text-gray-400">creative agency</span>
          </p>
          <p className="flex gap-4">
            <span className="font-bold">Branding, digital</span>
            <span className="text-gray-400">and communications</span>
          </p>
          00
        </div>
      </section>

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
