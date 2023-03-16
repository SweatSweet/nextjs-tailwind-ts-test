import { List } from "./List";
import { ListItem } from "./ListItem";
import { EventCard } from "./EventCard";

import NFT1 from "@/images/NFT1.svg";
import NFT2 from "@/images/NFT2.svg";

export const DashBoard = () => {
  return (
    <div className="m-0 p-[24px] flex gap-x-[24px]">
      <div className="flex-[1092]">
        <h2 className="text-2xl font-semibold opacity-[0.5]  mb-2">Events</h2>
        <div className="flex flex-col gap-y-[24px] w-100">
          <EventCard
            ticked={false}
            schedule="Harvest"
            caption="🍎🍌🍍The Fruit Salad Game🍆🥦🥕"
            title="Manure"
            amount={100}
            sucess={44}
            processing={8}
            failed={2}
            processed={`${50}%`}
            imgNFT={NFT1}
          ></EventCard>
          <EventCard
            ticked={true}
            schedule="It’s Raining"
            caption="🍎🍌🍍The Fruit Salad Game🍆🥦🥕"
            title="Water"
            amount={100}
            sucess={100}
            processing={0}
            failed={0}
            processed={`${100}%`}
            imgNFT={NFT2}
          ></EventCard>
        </div>
      </div>
      <div className="flex-[348]">
        <h2 className="text-2xl font-semibold opacity-[0.5] mb-2">Overview</h2>
        <div className="flex flex-col gap-y-[24px]">
          <List>
            <ListItem text="Wallet balance" number="0.489 ETH" />
          </List>
          <List title="NFTs">
            <ListItem text="NFT items" number="187" />
            <ListItem text="Collections" number="5" />
            <ListItem text="Minted" number="39" />
          </List>
          <List title="Saved Searches">
            <ListItem text="Green apple" />
            <ListItem text="Collections" />
            <ListItem text="Christmas tree" />
          </List>
          <List title="Recent Activity">
            <ListItem text="Settings > Account" />
            <ListItem text="Sales reports" />
          </List>
        </div>
      </div>
    </div>
  );
};
