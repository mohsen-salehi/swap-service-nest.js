import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SwapService } from './swap.service';
import { Transaction } from './transaction.entity';

@Controller('swap')
export class SwapController {
  constructor(private readonly swapService: SwapService) {}

  @Get('balance/:address/:tokenAddress')
  async getBalance(
    @Param('address') address: string,
    @Param('tokenAddress') tokenAddress: string,
  ): Promise<string> {
    return this.swapService.getTokenBalance(address, tokenAddress);
  }

  @Post('create')
  async createSwap(
    @Body() swapData: { fromToken: string; toToken: string; amount: number },
  ): Promise<Transaction> {
    return this.swapService.createSwapTransaction(
      swapData.fromToken,
      swapData.toToken,
      swapData.amount,
    );
  }

  @Get('transactions')
  async getAllTransactions(): Promise<Transaction[]> {
    return this.swapService.getAllTransactions();
  }
}
