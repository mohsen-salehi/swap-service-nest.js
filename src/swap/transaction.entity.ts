import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Transaction extends Model<Transaction> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fromToken: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  toToken: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  txHash: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;
}
