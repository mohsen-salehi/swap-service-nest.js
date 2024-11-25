import { Injectable } from '@nestjs/common';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

@Injectable()
export class BlockchainService {
  private client;

  constructor() {
    this.client = createPublicClient({
      chain: mainnet,
      transport: http(),
    });
  }

  async getLatestBlockNumber(): Promise<bigint> {
    return this.client.getBlockNumber();
  }

  async getTokenBalance(
    address: string,
    tokenAddress: string,
  ): Promise<bigint> {
    return this.client.readContract({
      address: tokenAddress,
      abi: [
        {
          inputs: [{ name: '_owner', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ name: 'balance', type: 'uint256' }],
          type: 'function',
        },
      ],
      functionName: 'balanceOf',
      args: [address],
    });
  }
}
