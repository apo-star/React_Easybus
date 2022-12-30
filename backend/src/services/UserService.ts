import User from "../models/User";

export const QueryUser = async (email: string) => {
  return await User.findOne({ email });
};
