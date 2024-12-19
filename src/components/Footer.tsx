export const Footer = () => (
  <footer className="px-8 py-24 border-t border-gray-800 container mx-auto">
    <div className="flex flex-col gap-8 items-stretch md:items-start md:flex-row md:gap-8 text-gray-400 text-center md:text-left">
      <div className="flex-1">
        <h4 className="text-2xl font-bold">Our Address</h4>
        <p>
          Монгол улс Улаанбаатар Баянзүрх Манлай баатар Дамдинсүрэн 43 Шинэ
          Монгол Технологийн коллеж
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl font-bold">Company Info</h4>
        <p>VAT: 75777799</p>
        <p>Company no. 11843590</p>
        <p>Registered in Ulaanbaatar</p>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl font-bold">Follow us</h4>
        <p>Fb | Tw | Ig | Li</p>
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
  </footer>
);
