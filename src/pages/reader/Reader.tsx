import { useLocation } from "react-router-dom";
import readings from "../../readings.json";
import { JapanText } from "../../components/JapanText";
import { useTranslation } from 'react-i18next';

const Reader = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { level } = location.state || { level: "N5" };
  const reading = !!(readings.readings as any)[level]
    ? (readings.readings as any)[level].text
    : t('Reading not found.');

  return (
    <div className="container flex flex-col gap-4 items-center p-8">
      <h1 className="text-4xl font-bold">{t('Reader Page - Level:')} {level}</h1>
      <JapanText text={reading} />
    </div>
  );
};

export default Reader;
