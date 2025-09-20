import { Faqcontent } from "./faqcontent";
// import Faqcontent from "./faqcontent";
import { Lines } from "./lines";

export const Faqcontainer = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden p-7 lg:h-[100vh] lg:p-0">
      <Lines />
      <Faqcontent />
    </div>
  );
};
