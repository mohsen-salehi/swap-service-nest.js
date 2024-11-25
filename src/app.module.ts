import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './database/database.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { SwapModule } from './swap/swap.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    BlockchainModule,
    SwapModule,
  ],
})
export class AppModule {}
