import { Header } from "../../components/Header";

export const Error = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <section className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="font-bold text-4xl">Page not found.</h1>
      </section>
    </div>
  );
};
