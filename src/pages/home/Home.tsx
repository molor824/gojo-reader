import Monopo from './Monopo';

export const Home = () => {
  return (
    <main>
      <Monopo />

      <section className="px-6 flex flex-col justify-center max-w-7xl mx-auto mt-[-330px] ">
        <div className="text-container flex flex-col items-center ">
          <div className="flex justify-between w-full ">
            <p className="text-xl font-bold">Based in London</p>
            <p className="text-xl font-bold">Design-driven</p>
            <p className="text-xl font-bold">Branding, digital</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-lg text-gray-300 ">Born in Tokyo</p>
            <p className="text-lg text-gray-300 ml-[40px]">creative agency</p>
            <p className="text-lg text-gray-300 mr-[-10px]">and communications</p>
          </div>
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
