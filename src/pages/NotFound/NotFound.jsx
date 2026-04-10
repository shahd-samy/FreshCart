import { Link } from "react-router";



export default function NotFound() {
  return (
    <>
      <section className="flex flex-col justify-center items-center py-20 gap-5 bg-primary-100">

        <div className="w-80  ">
          <img className="object-cover w-fit" src="/404-min.png" alt="Not Found" />
        </div>
        <Link to='/'>
          <button className='p-4 px-7 shadow-2xl rounded-lg bg-gray-900/87 hover:bg-gray-900/80 transition-all duration-100 hover:scale-101 text-primary-300 font-bold text-lg '>GO TO HOME PAGE</button>
        </Link>

      </section>

    </>
  )
}
