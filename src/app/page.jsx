import Link from "next/link";
import ClientComponent from "./components/ClientComponent";
// import ServerComponent from "./components/ServerComponent";

export default function Home() {
  return (
    <div>
      <h1>This is the homepage</h1>
      {/* <ServerComponent/> */}
      <ClientComponent/>
    </div>
  );
}
