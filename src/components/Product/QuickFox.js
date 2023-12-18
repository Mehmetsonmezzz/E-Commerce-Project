import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productImage } from "../../data/data";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const QuickFox = () => {
  return (
    <div>
      <div className="flex justify-center gap-8 py-7 border-b-2 border-gray-200 border-solid pb-4 mb-3 mr-96 ml-96 text-[#737373] font-bold">
        <h1>Description</h1>
        <h1>Additional Information</h1>
        <h1>Reviews (0)</h1>
      </div>
      <div className="flex justify-center gap-20">
        <div></div>
        <div className="w-[316px] h-[372px]">
          <img src={productImage.src} alt={productImage.alt}></img>
        </div>
        <div className="w-1/5">
          <h1 className="text-[#252B42] font-bold text-xl mb-4">
            the quick fox jumps over
          </h1>
          <p className="text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="grid">
          <h1 className="text-[#252B42] font-bold text-xl">
            the quick fox jumps over
          </h1>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
            <p className="text-[#737373]">the quick fox jumps over</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
            <p className="text-[#737373]">the quick fox jumps over</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
            <p className="text-[#737373]">the quick fox jumps over</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
            <p className="text-[#737373]">the quick fox jumps over</p>
          </div>
          <h1 className="text-[#252B42] font-bold text-xl">
            the quick fox jumps over
          </h1>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
            <p className="text-[#737373]">the quick fox jumps over</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
            <p className="text-[#737373]">the quick fox jumps over</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
            <p className="text-[#737373]">the quick fox jumps over</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickFox;
