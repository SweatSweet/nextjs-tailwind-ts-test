import Image from "next/image";
import cn from "classnames";

import { ControlBoardCard } from "./ControlBoardCard";

import LogoNft from "@/images/LogoNft.svg";
import LogoHolders from "@/images/LogoHolders.svg";
import LogoAirdrop from "@/images/LogoAirdrop.svg";
import LogoTradeIn from "@/images/LogoTradeIn.svg";
import LogoSales from "@/images/LogoSales.svg";

interface Props {
  className?: string;
}

export const ControlBoard = (props: Props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-x-[16px] w-100",
        props.className
      )}
    >
      <ControlBoardCard bgColor="gradient-green" caption="NFT Management">
        <Image src={LogoNft} alt="LogoNft" width={60} height={74} />
      </ControlBoardCard>
      <ControlBoardCard
        bgColor="bg-[#F5D72E]"
        bgOpacity="bg-opacity-[0.2]"
        caption="Find Holders"
      >
        <Image src={LogoHolders} alt="LogoHolders" width={68.04} />
      </ControlBoardCard>
      <ControlBoardCard
        bgColor="bg-[#2EC4DA]/[0.2]"
        bgOpacity="bg-opacity-[0.2]"
        caption="Airdrop"
      >
        <Image src={LogoAirdrop} alt="LogoAirdrop" width={67.29} />
      </ControlBoardCard>
      <ControlBoardCard
        bgColor="bg-[#F5D72E]"
        bgOpacity="bg-opacity-[0.2]"
        caption="Trade-in"
      >
        <Image src={LogoTradeIn} alt="LogoTradeIn" width={74.69} />
      </ControlBoardCard>
      <ControlBoardCard
        bgColor="bg-[#EF4FAD]"
        bgOpacity="bg-opacity-[0.2]"
        caption="Sales"
      >
        <Image src={LogoSales} alt="LogoSales" width={61.44} />
      </ControlBoardCard>
    </div>
  );
};
