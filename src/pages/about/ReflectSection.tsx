import { useTranslation } from 'react-i18next';

const ReflectSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-500 to-black blur-3xl opacity-30"></div>

      {/* Header Content */}
      <div className="relative z-10 text-center px-4">
        <div className="text-sm font-medium text-purple-300 mb-2">{t('Welcome to Gojo-Reader!')}</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('About Us')}</h1>
        <p className="text-lg md:text-xl text-gray-400">{t('Never miss a note, idea, or connection.')}</p>
        {/* <img src="/blackHole.gif" alt="Description of GIF" className="mt-4 w-1/2 mx-auto" /> */}
      </div>

      {/* Calendar/Content Section */}
      <div className="relative z-10 mt-10 w-full max-w-4xl bg-transparent backdrop-blur bg-opacity-70 rounded-lg p-6 md:p-10 shadow-lg border-2 border-white border-opacity-20">
        {/* Pseudo-element for blurred border */}
        <div className="absolute inset-0 rounded-lg border-4 border-transparent blur-lg bg-transparent" ></div>
        <div className="relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Sidebar */}
            <div className="text-left space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold">{t('You can learn')}</h3>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">{t('Fun')}</li>
                <li className="hover:text-white cursor-pointer">{t('Convenient')}</li>
                <li className="hover:text-white cursor-pointer">{t('Efficient')}</li>
              </ul>
            </div>

          {/* Main Calendar Section */}
          <div className="mt-6 md:mt-0 text-gray-300 mx-3 w-96">
            <h3 className="text-lg font-semibold mb-2">{t('November 21st, 2024')}</h3>
            <p className="mb-4">{t('The day we start develop this web')}</p>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('Our website started because we wanted to provide an easier and interesting way to learn japanese')}</li>
              <li>{t('We provide word translations and flashcards to help guide you towards learning japanese.')}</li>
              
            </ul>
          </div>

          {/* Calendar */}
          <div className="mt-6 md:mt-0  ">
            <div className="bg-transparent rounded-lg p-4 border-2 border-white border-opacity-20">
              <h4 className="text-white mb-2">November 2024</h4>
              <div className="grid grid-cols-7 gap-1 text-center text-sm text-white">
                {/* Days of the week */}
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                  <div key={day} className="font-bold">{day}</div>
                ))}

                  {/* Example days */}
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded-lg ${i === 20 ? 'bg-purple-600 text-white' : 'hover:bg-gray-700 cursor-pointer transition duration-300'}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectSection;
