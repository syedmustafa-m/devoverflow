"use server";

// Model imports from the database directory
import Question from "@/database/question.model"; // Model for handling questions
import Tag from "@/database/tag.model"; // Model for handling tags
import User from "@/database/user.model"; // Model for handling users

// Utility function imports
import { connectToDatabase } from "../mongoose"; // Utility to connect to the database

// Type imports for TypeScript definitions
import { GetQuestionsParams } from "./shared.types"; // Type definitions for question parameters
import { revalidatePath } from "next/cache";

/**
 * Defines the getQuestions function
 *
 * @param params
 */

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();

    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User });

    return { questions };
  } catch (error) {}
}

/**
 * Defines the createQuestion function
 *
 * @param params
 */

export async function createQuestion(params: any) {
  // eslint-disable-next-line no-empty
  try {
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    // Create question
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments: any = [];

    // Create tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        {
          name: {
            $regex: new RegExp(`^${tag}$`, "i"),
          },
        },
        {
          $setOnInsert: {
            name: tag,
          },
          $push: {
            question: question._id,
          },
        },
        {
          upsert: true,
          new: true,
        }
      );

      tagDocuments.push(existingTag._id);
    }

    // Add tags to question
    await Question.findByIdAndUpdate(question._id, {
      $push: {
        tags: {
          $each: tagDocuments,
        },
      },
    });

    revalidatePath(path);
  } catch (error) {}
}
