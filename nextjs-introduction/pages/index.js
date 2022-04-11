import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is Great</Link>
        </li>
        <li>
          <Link href='/news/react-is-great'>React is Great</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
