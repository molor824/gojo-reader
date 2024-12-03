export const Footer = () => (
  <footer className="px-6 py-24 border-t border-gray-800">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-24 md:flex-row md:space-x-8 text-gray-400">
        <div className="flex-1">
          <h4 className="text-2xl font-bold">Our Address</h4>
          <p>Монгол улс Улаанбаатар Баянзүрх Манлай баатар Дамдинсүрэн 43 Шинэ Монгол Технологийн коллеж</p>
        </div> 
        <div className="flex-1">
          <h4 className="text-2xl font-bold ml-10">Company Info</h4>
          <p className="ml-10">VAT: 75777799</p>
          <p className="ml-10">Company no. 11843590</p>
          <p className="ml-10">Registered in Ulaanbaatar</p>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold">Follow us</h4>
          <p>Fb | Tw | Ig | Li</p>
          <p>
            <a href="https://monopotky.com" className="hover:text-gray-400 transition-colors">Gojo-reader TKY</a> | 
            <a href="https://monoponyc.com" className="hover:text-gray-400 transition-colors">Gojo-reader NYC</a> | 
            <span>POWERED BY UB</span>
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold">Contact</h4>
          <a
            href="mailto:contact@monopo.london"
            className="inline-block text-xl hover:text-gray-400 transition-colors"
          >
            contact@molko.mn →
          </a>
        </div>
      </div>
    </div>
  </footer>
);
