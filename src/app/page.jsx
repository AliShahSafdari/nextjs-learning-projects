import Link from "next/link";

export default function Home(){
  return( <div>
    <h1>This is the homepage</h1>
    <Link href="/blog"> Go to Blogs</Link>
  </div>
)}