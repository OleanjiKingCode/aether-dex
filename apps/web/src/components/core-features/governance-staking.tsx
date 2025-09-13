import Image from "next/image";

import GovernanceFlow from "public/assets/core-features/flow/governace.png";
import CheckIcon from "public/assets/core-features/icon/check-yellow.svg";
import GovernanceIcon from "public/assets/core-features/icon/governance-icon.svg";
import PeopleIcon from "public/assets/core-features/icon/people.svg";

import { InfoCard } from "./info-card";
import { SubTitle } from "./sub-title";

export const GovernanceAndStaking = () => {
  return (
    <div className="flex w-full gap-12">
      <div className="flex flex-1 flex-col gap-[20px] py-8">
        <SubTitle
          color="secondary"
          icon={GovernanceIcon}
          orderNumber={"05"}
          title="Governance and Staking with $AETH"
        />
        <div className="max-w-[576px] font-geist-mono text-base text-muted-foreground">
          The $AETH token will power governance and rewards. Stake to earn a
          share of platform fees, or use your tokens to vote on upgrades such as
          new blockchain integrations.
        </div>
        <div className="flex gap-[27px]">
          <InfoCard
            content="12.5% APY"
            header="STAKING"
            iconUrl={GovernanceIcon}
          />
          <InfoCard
            content="DAO VOTING"
            header="GOVERNANCE"
            iconUrl={PeopleIcon}
          />
        </div>
        <div className="flex flex-col px-4">
          <div className="flex gap-[12px]">
            <div>
              <Image alt="" height={28} src={CheckIcon} width={28} />
            </div>
            <div className="font-geist-mono text-base text-muted-foreground">
              Zero-knowledge transaction proofs
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex gap-[12px]">
            <div>
              <Image alt="" height={28} src={CheckIcon} width={28} />
            </div>
            <div className="font-geist-mono text-base text-muted-foreground">
              On-chain verification without exposure
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex gap-[12px]">
            <div>
              <Image alt="" height={28} src={CheckIcon} width={28} />
            </div>
            <div className="font-geist-mono text-base text-muted-foreground">
              Optical transaction anonymization
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image
          alt="Governance and staking flow"
          className="w-full"
          src={GovernanceFlow}
        />
      </div>
    </div>
  );
};
