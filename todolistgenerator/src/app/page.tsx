import Link from "next/link"

export default function Home() {
  return (
    <section className="bg-black text-white rounded-xl p-10 w-4/5 flex flex-col justify-center items-center gap-10 mx-auto grow mb-10 drop-shadow-lg text-center font-bold">
      <h1 className="text-6xl">Are you looking for an solution to manage your tasks?</h1>
      <p className="text-4xl">Todo.AI is the Right Place for You</p>
      <Link href="https://github.com/mainak0907/Todo.AI-Using-Next-JS" target="_blank" className="text-2xl bg-gray-100 text-black px-4 py-2 rounded">Go to Source Code</Link>
    </section>
  )
}