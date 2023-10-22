import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hi World <br />
      <Link href="/about-us">About Us</Link>
    </div>
  );
}
