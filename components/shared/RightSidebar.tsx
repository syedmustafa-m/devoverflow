import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const topQuestions = [
  {
    _id: 1,
    title: "How can I manage unhandled promise rejections in Node.js?",
  },
  {
    _id: 2,
    title:
      "What's the difference between `exports` and `module.exports` in Node.js?",
  },
  {
    _id: 3,
    title:
      "How do I use environment variables in Node.js without exposing them in my codebase?",
  },
  {
    _id: 4,
    title:
      "Why am I getting an `EADDRINUSE` error when trying to start my Node.js server?",
  },
  {
    _id: 5,
    title: "How do I properly use middleware for error handling in Express.js?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "javascript",
    totalQuestions: 10,
  },
  {
    _id: "2",
    name: "nodejs",
    totalQuestions: 2,
  },
  {
    _id: "3",
    name: "reactjs",
    totalQuestions: 3,
  },
  {
    _id: "4",
    name: "nextjs",
    totalQuestions: 6,
  },
  {
    _id: "5",
    name: "expressjs",
    totalQuestions: 3,
  },
  {
    _id: "6",
    name: "typescript",
    totalQuestions: 5,
  },
  {
    _id: "7",
    name: "mongodb",
    totalQuestions: 9,
  },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0  top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="Chevron Right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
