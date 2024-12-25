import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Read = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mx-auto container bg-black">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        {t('Japanese Readings')}
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 px-6 py-4 relative z-10 items-center justify-center mx-auto mt-10 text-white text-left">
        <Link to="/reader">
          <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
            <h2 className="text-3xl font-semibold mb-2">{t('N5')}</h2>
            <img
              src="/fiveLeaf.png"
              alt={t('N5')}
              className="w-full h-[150px] object-cover mb-[15px]"
            />
          </div>
        </Link>
        {/* N4 Section */}
        <Link to="/reader" state={{ level: "N4" }}>
          <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
            <h2 className="text-3xl font-semibold mb-2">{t('N4')}</h2>
            <img
              src="/fourLeaf.png"
              alt={t('N4')}
              className="w-full h-[150px] object-cover mb-[15px]"
            />
          </div>
        </Link>
        {/* N3 Section */}
        <Link to="/reader" state={{ level: "N3" }}>
          <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
            <h2 className="text-3xl font-semibold mb-2">{t('N3')}</h2>
            <img
              src="/threeLeaf.png"
              alt={t('N3')}
              className="w-full h-[150px] object-cover mb-[15px]"
            />
          </div>
        </Link>
        {/* N2 Section */}
        <Link to="/reader" state={{ level: "N2" }}>
          <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
            <h2 className="text-3xl font-semibold mb-2">{t('N2')}</h2>
            <img
              src="/twoLeaf.png"
              alt={t('N2')}
              className="w-full h-[150px] object-cover mb-[15px]"
            />
          </div>
        </Link>
        {/* N1 Section */}
        <Link to="/reader" state={{ level: "N1" }}>
          <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
            <h2 className="text-3xl font-semibold mb-2">{t('N1')}</h2>
            <img
              src="/oneLeaf.png"
              alt={t('N1')}
              className="w-full h-[150px] object-cover mb-[15px]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Read;
