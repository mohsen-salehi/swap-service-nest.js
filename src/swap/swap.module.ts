// src/swap/swap.module.ts
import { Module } from '@nestjs/common';
import { SwapController } from './swap.controller';
import { SwapService } from './swap.service';
import { BlockchainModule } from '../blockchain/blockchain.module';
import { Transaction } from './transaction.entity';

@Module({
  imports: [BlockchainModule],
  controllers: [SwapController],
  providers: [
    SwapService,
    {
      provide: 'TRANSACTION_REPOSITORY',
      useValue: Transaction,
    },
  ],
})
export class SwapModule {}
