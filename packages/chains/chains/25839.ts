import type { Chain } from "../src/types";
export default {
  "chain": "tALV",
  "chainId": 25839,
  "explorers": [
    {
      "name": "AlveyScan Testnet",
      "url": "https://alveytestnet.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://faucet.alveytestnet.com"
  ],
  "infoURL": "https://alveychain.com/",
  "name": "AlveyChain Testnet",
  "nativeCurrency": {
    "name": "AlveyCoin Testnet",
    "symbol": "tALV",
    "decimals": 18
  },
  "networkId": 25839,
  "rpc": [
    "https://25839.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-rpc.alvey.io"
  ],
  "shortName": "talv",
  "slug": "alveychain-testnet",
  "testnet": true
} as const satisfies Chain;