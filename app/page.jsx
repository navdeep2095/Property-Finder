import Link from "next/link"

const HomePage = () => {
  return (
    <>
    <h1 className="text-3xl">Welcome</h1>
    <Link href='/properties'>Show the Properties page</Link>
    </>
  )
}

export default HomePage