import { Schema, model, Types } from 'mongoose';

export interface IRelation {
  firstMember: Types.ObjectId;
  secondMember: Types.ObjectId;
  value: string;
}

const relationSchema = new Schema<IRelation>({
  firstMember: {
    type: Schema.Types.ObjectId,
    ref: 'member',
    required: true,
  },
  secondMember: {
    type: Schema.Types.ObjectId,
    ref: 'member',
    required: true,
  },
  value: {
    type: String,
    required: true,
    enum: ['spouse', 'child'],
  },
});

export default model<IRelation>('relation', relationSchema);
