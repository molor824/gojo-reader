export const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold">monopo</div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="#work" className="hover:text-gray-400 transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-gray-400 transition-colors">
            Services
          </a>
          <a href="#team" className="hover:text-gray-400 transition-colors">
            Team
          </a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
          <a href="#press" className="hover:text-gray-400 transition-colors">
            Press & News
          </a>
        </div>

        <div className="hidden md:flex space-x-4 text-sm">
          <span>05:28 PM</span>
          <span>01:28 AM</span>
          <span>12:28 PM</span>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};
