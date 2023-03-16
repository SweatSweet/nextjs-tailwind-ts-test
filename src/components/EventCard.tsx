import Image from "next/image";
import cn from "classnames";

import { Airdrop } from "./Airdrop";
import { Schedule } from "./Schedule";
import { Timing } from "./Timing";

interface Props {
  ticked: boolean;
  schedule: string;
  caption: string;
  title: string;
  amount: number;
  sucess: number;
  processing: number;
  failed: number;
  processed: string;
  imgNFT: string;
}

export const EventCard = (props: Props) => {
  return (
    <div className="relative bg-[#FFFFFF]/[0.8]">
      <div className="absolute left-[50%] translate-x-[-50%] w-[640px] h-[264px] z-0 flex items-center overflow-hidden border">
        <Image src={props.imgNFT} alt={"imgNFT"} width={640} />
      </div>
      <div className="m-0 py-[24px] shadow-md border border-opacity-[0.1] rounded-lg w-100 flex justify-between gap-x-[32px] z-10 bg-[#FFFFFF]/[0.8] backdrop-blur-[24px]">
        <div className="flex-auto">
          <div className="p-0 m-0 flex items-center justify-start gap-x-2">
            <Airdrop text="Airdrop" ticked={props.ticked} />
            <Schedule text={props.schedule} />
            <Timing status={"Started"} time={"2022-09-13 08:57:15"} />
          </div>
          <div className="px-[24px] pt-[13px] m-0">
            <h4 className="text-base pb-1">{props.caption}</h4>
            <div className="flex gap-x-2.5 items-center justify-start pb-3">
              <span className="text-3xl p-0 font-semibold">{props.title}</span>
              <div className="flex gap-x-[5px] items-end justify-start">
                <span className="text-[10px]">x</span>
                <span className="text-sm">{props.amount}</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-4  pb-3">
              <span className="text-sm">Wallet Transactions:</span>
              <div className="flex items-center justify-between gap-x-1">
                <span className="text-sm font-bold">{props.sucess}</span>
                <span className="text-sm">Success</span>
              </div>
              <div className="flex items-center justify-between gap-x-1">
                <span className="text-sm font-bold">{props.processing}</span>
                <span className="text-sm">Processing</span>
              </div>
              <div className="flex items-center justify-between gap-x-1">
                <span className="text-sm font-bold">{props.failed}</span>
                <span>Failed</span>
              </div>
            </div>
            <div className="w-100 h-4 bg-black bg-opacity-[0.1] border rounded-lg">
              <div
                style={{ width: props.processed }}
                className={cn(
                  "h-4 gradient-processing bg-opacity-[0.1] border rounded-lg"
                )}
              ></div>
            </div>
            <div className="flex items-center justify-start gap-x-2  mt-4 ">
              <button className="bg-black rounded-lg text-white text-base font-semibold p-4 w-[126px] h-10 flex items-center justify-center">
                More Details
              </button>
              {!props.ticked && (
                <>
                  <button className="bg-white border border-black rounded-lg text-black text-base p-4 w-[126px] h-10 flex items-center justify-center">
                    Cancel
                  </button>
                  <span className="flex gap-x-2 text-base px-2">
                    <input type="checkbox" className="accent-black" />
                    Receive report on email
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <Image
            src={props.imgNFT}
            alt={props.imgNFT}
            width={303}
            height={216}
          />
        </div>
      </div>
    </div>
  );
};
