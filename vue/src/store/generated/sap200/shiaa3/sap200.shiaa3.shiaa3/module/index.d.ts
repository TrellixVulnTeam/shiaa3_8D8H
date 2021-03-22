import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteMembers } from "./types/shiaa3/tx";
import { MsgCreatePool1Ticket } from "./types/shiaa3/tx";
import { MsgDeleteWinners } from "./types/shiaa3/tx";
import { MsgCreatePool3Ticket } from "./types/shiaa3/tx";
import { MsgUpdateJoinPoolAndStakeAsset } from "./types/shiaa3/tx";
import { MsgCreatePool4Ticket } from "./types/shiaa3/tx";
import { MsgDeletePool1Ticket } from "./types/shiaa3/tx";
import { MsgCreateWinners } from "./types/shiaa3/tx";
import { MsgDeletePool3Ticket } from "./types/shiaa3/tx";
import { MsgCreateMembers } from "./types/shiaa3/tx";
import { MsgDeletePool0Ticket } from "./types/shiaa3/tx";
import { MsgUpdatePool3Ticket } from "./types/shiaa3/tx";
import { MsgUpdatePool0Ticket } from "./types/shiaa3/tx";
import { MsgCreatePool2Ticket } from "./types/shiaa3/tx";
import { MsgCreateJoinPoolAndStakeAsset } from "./types/shiaa3/tx";
import { MsgDeleteJoinPoolAndStakeAsset } from "./types/shiaa3/tx";
import { MsgUpdateMembers } from "./types/shiaa3/tx";
import { MsgDeletePool2Ticket } from "./types/shiaa3/tx";
import { MsgUpdatePool4Ticket } from "./types/shiaa3/tx";
import { MsgCreatePool0Ticket } from "./types/shiaa3/tx";
import { MsgUpdateWinners } from "./types/shiaa3/tx";
import { MsgUpdatePool1Ticket } from "./types/shiaa3/tx";
import { MsgDeletePool4Ticket } from "./types/shiaa3/tx";
import { MsgUpdatePool2Ticket } from "./types/shiaa3/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteMembers: (data: MsgDeleteMembers) => EncodeObject;
    msgCreatePool1Ticket: (data: MsgCreatePool1Ticket) => EncodeObject;
    msgDeleteWinners: (data: MsgDeleteWinners) => EncodeObject;
    msgCreatePool3Ticket: (data: MsgCreatePool3Ticket) => EncodeObject;
    msgUpdateJoinPoolAndStakeAsset: (data: MsgUpdateJoinPoolAndStakeAsset) => EncodeObject;
    msgCreatePool4Ticket: (data: MsgCreatePool4Ticket) => EncodeObject;
    msgDeletePool1Ticket: (data: MsgDeletePool1Ticket) => EncodeObject;
    msgCreateWinners: (data: MsgCreateWinners) => EncodeObject;
    msgDeletePool3Ticket: (data: MsgDeletePool3Ticket) => EncodeObject;
    msgCreateMembers: (data: MsgCreateMembers) => EncodeObject;
    msgDeletePool0Ticket: (data: MsgDeletePool0Ticket) => EncodeObject;
    msgUpdatePool3Ticket: (data: MsgUpdatePool3Ticket) => EncodeObject;
    msgUpdatePool0Ticket: (data: MsgUpdatePool0Ticket) => EncodeObject;
    msgCreatePool2Ticket: (data: MsgCreatePool2Ticket) => EncodeObject;
    msgCreateJoinPoolAndStakeAsset: (data: MsgCreateJoinPoolAndStakeAsset) => EncodeObject;
    msgDeleteJoinPoolAndStakeAsset: (data: MsgDeleteJoinPoolAndStakeAsset) => EncodeObject;
    msgUpdateMembers: (data: MsgUpdateMembers) => EncodeObject;
    msgDeletePool2Ticket: (data: MsgDeletePool2Ticket) => EncodeObject;
    msgUpdatePool4Ticket: (data: MsgUpdatePool4Ticket) => EncodeObject;
    msgCreatePool0Ticket: (data: MsgCreatePool0Ticket) => EncodeObject;
    msgUpdateWinners: (data: MsgUpdateWinners) => EncodeObject;
    msgUpdatePool1Ticket: (data: MsgUpdatePool1Ticket) => EncodeObject;
    msgDeletePool4Ticket: (data: MsgDeletePool4Ticket) => EncodeObject;
    msgUpdatePool2Ticket: (data: MsgUpdatePool2Ticket) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
