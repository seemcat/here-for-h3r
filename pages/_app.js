/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
      <h1 className="text-2xl font-semibold">HERE FOR H3R</h1>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">Home</a>
          </Link>
          <Link href="/login">
            <a className="mr-4 text-pink-500">Login</a>
          </Link>
          <Link href="/logout">
            <a className="mr-4 text-pink-500">Logout</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
