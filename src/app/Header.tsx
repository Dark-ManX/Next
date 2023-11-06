import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`absolute top-0 left-0 w-screen flex bg-blue-600 text-yellow-100 p-3 text-lg`}
    >
      <a href="#" className={`flex bg-blue`}>
        Logo
      </a>
      <p>Your&apos;s personal assistant</p>
      <ul className={`flex ml-auto`}>
        <li className={`mr-6`}>
          <Link href="/auth">Sign In</Link>
        </li>
        <li>
          <Link href="/auth">Sign Up</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
