import Link from "next/link";

export default function Home(){
  return( <div>
    <h1>This is the homepage</h1>
    <Link href="/profile">
      <button>go to profile</button>
    </Link>
  </div>
)}