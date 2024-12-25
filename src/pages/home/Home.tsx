import { MouseMask } from "./MouseMask";
import { useTranslation } from "react-i18next";

const GREETING = "Welcome to Gojo-Reader!";
const GREETING_JP = "ゴジョーリーダーへようこそ！";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex flex-col items-center p-4">
     
      <MouseMask greeting={t(GREETING)} greetingJp={GREETING_JP} />
    </section>
  );
};
