import mongoose, { Schema } from 'mongoose';

export interface IBlog {
  title: string;
  des: string;
  active: boolean;
  users: string[];
  slug: string;
  date?: Date;
}

const blogSchema: Schema<IBlog> = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    required: true,
    default: false,
  },

  users: {
    type: [String],
    required: true,
  },

  slug: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IBlog>('Blog', blogSchema);
