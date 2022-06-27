import { Schema, model } from 'mongoose';

export interface IMember {
  name: string;
  gender: 'Male' | 'Female';
  birthYear?: number;
}

const memberSchema = new Schema<IMember>({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female'],
  },
  birthYear: {
    type: Number,
  },
});

export default model<IMember>('member', memberSchema);
