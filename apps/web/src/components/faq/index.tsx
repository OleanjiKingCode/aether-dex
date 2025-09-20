import { Lines } from "../about/lines";
import { Faqcontainer } from "./faqcontainer";
import { Intro } from "./intro";

export const FAQ = () => {
  return (
    <div className="relative flex flex-col overflow-hidden lg:px-[80px]">
      <Lines />
      <Intro />
      <Faqcontainer />
    </div>
  );
};
