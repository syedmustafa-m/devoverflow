"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import console from "console";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

/**
 * Get user by ID
 *
 * @param params
 * @returns user
 */

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 * Create a new user
 *
 * @param params
 * @returns user
 */

export async function createUser(userParams: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userParams);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 * Update user
 *
 * @param params
 * @returns user
 */

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 * Delete user
 *
 * @param params
 * @returns user
 */

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();

    const { clerkId } = params;

    const user = await User.findOne({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // Delete user and all associated data

    // Get ID of all questions by user
    // const userQuestionIds = await Question.find({ author: user._id }).distinct(
    //   "_id"
    // );

    // Delete all questions by user
    await Question.deleteMany({ author: user._id });

    // TODO: Delete all answers by user

    const deletedUser = await User.findOneAndDelete({ clerkId });

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
