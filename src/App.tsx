function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-sm">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold">monopo</div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
            <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
            <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
            <a href="#team" className="hover:text-gray-400 transition-colors">Team</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
            <a href="#press" className="hover:text-gray-400 transition-colors">Press & News</a>
          </div>

          <div className="hidden md:flex space-x-4 text-sm">
            <span>05:28 PM</span>
            <span>01:28 AM</span>
            <span>12:28 PM</span> 
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Main Content */}
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
            </p>00
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

      {/* Footer */}
      <footer className="px-6 py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold">We would love to hear from you.</h4>
            <p className="text-gray-400">Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
            <a href="mailto:contact@monopo.london" 
               className="inline-block text-xl hover:text-gray-400 transition-colors">
              contact@monopo.london →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
