import { Injectable, Inject } from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { BlockchainService } from '../blockchain/blockchain.service';

@Injectable()
export class SwapService {
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: typeof Transaction,
    private blockchainService: BlockchainService,
  ) {}

  async getTokenBalance(
    address: string,
    tokenAddress: string,
  ): Promise<string> {
    const balance = await this.blockchainService.getTokenBalance(
      address,
      tokenAddress,
    );
    return balance.toString();
  }

  async createSwapTransaction(
    fromToken: string,
    toToken: string,
    amount: number,
  ): Promise<Transaction> {
    return this.transactionRepository.create({
      fromToken,
      toToken,
      amount,
      txHash: 'pending',
      status: 'pending',
    });
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionRepository.findAll();
  }
}
