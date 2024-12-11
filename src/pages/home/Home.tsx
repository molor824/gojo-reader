import { JapanText } from "../../components/JapanText";
import { MouseMask } from "./MouseMask";

const GREETING = "Welcome to Gojo-Reader!";
const GREETING_JP = "ゴジョーリーダーへようこそ！";

export const Home = () => {
  return (
    <section className="container flex flex-col items-center p-8">
      <MouseMask greeting={GREETING} greetingJp={GREETING_JP} />
      <JapanText text="この テキスト を ホバー して/する ;、 意味 を 見て/見る ください/下さい ;!" />
    </section>
  );
};
