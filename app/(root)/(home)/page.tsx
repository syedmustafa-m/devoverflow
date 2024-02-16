import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    key: "1",
    _id: "1",
    title: "How can I manage unhandled promise rejections in Node.js?",
    tags: [
      {
        _id: "1",
        name: "javascript",
      },
      {
        _id: "2",
        name: "nodejs",
      },
    ],
    author: {
      _id: "placeholder-id",
      name: "John Doe",
      picture: "placeholder-picture-url",
    },

    upvotes: 151242,
    views: 50035,
    answers: Array(5).fill({}), // Assuming no specific structure for answers
    createdAt: new Date("2021-09-01T07:00:00.000Z"),
  },
  {
    key: "2",
    _id: "2",
    title:
      "What's the difference between `exports` and `module.exports` in Node.js?",
    tags: [
      {
        _id: "1",
        name: "javascript",
      },
      {
        _id: "2",
        name: "nodejs",
      },
    ],
    author: {
      _id: "placeholder-id",
      name: "John Doe",
      picture: "placeholder-picture-url",
    },

    upvotes: 10,
    views: 100,
    answers: Array(5).fill({}),
    createdAt: new Date("2021-09-01T07:00:00.000Z"),
  },
  {
    key: "3",
    _id: "3",
    title:
      "How do I use environment variables in Node.js without exposing them in my codebase?",
    tags: [
      {
        _id: "1",
        name: "javascript",
      },
      {
        _id: "2",
        name: "nodejs",
      },
    ],
    author: {
      _id: "placeholder-id",
      name: "John Doe",
      picture: "placeholder-picture-url",
    },

    upvotes: 10,
    views: 100,
    answers: Array(5).fill({}),
    createdAt: new Date("2021-09-01T07:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and
                    kickstart the discussion. our query could be the next big thing
                    others learn from. Get involved! 💡"
            link="/"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
