import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-8 py-24 border-t border-gray-800 container mx-auto">
      <div className="flex flex-col gap-8 items-stretch md:items-start md:flex-row md:gap-8 text-gray-400 text-center md:text-left">
        <div className="flex-1">
          <h4 className="text-2xl font-bold">{t("Our Address")}</h4>
          <p>
            {t(
              "Монгол улс Улаанбаатар Баянзүрх Манлай баатар Дамдинсүрэн 43 Шинэ Монгол Технологийн коллеж"
            )}
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold">{t("Company Info")}</h4>
          <p>{t("VAT")}: 75777799</p>
          <p>{t("Company no.")}: 11843590</p>
          <p>
            {t("Registered in")}: {t("Ulaanbaatar")}
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold">{t("Follow us")}</h4>
          <p>
            {t("Fb")} | {t("Tw")} | {t("Ig")} | {t("Li")}
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold">{t("Contact")}</h4>
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
};
