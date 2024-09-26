import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-transparent text-white rounded-xl p-6 sm:p-10 w-11/12 sm:w-4/5 flex flex-col justify-center items-center gap-6 sm:gap-10 mx-auto grow mb-6 sm:mb-10 drop-shadow-lg text-center font-bold">
      <h1 className="text-4xl sm:text-6xl text-black dark:text-white leading-tight sm:leading-none">
        Are you looking for a solution to manage your tasks?
      </h1>
      <p className="text-2xl sm:text-4xl text-gray-700 dark:text-yellow-100">
        Todo.AI is the Right Place for You
      </p>
    </section>
  );
}

