import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/client";

import GithubLoginButton from "../components/GithubLoginButton/GithubLoginButton";

const Home: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    // Avoids any flash incorrect content on initial page load
    return null;
  }

  if (!session) {
    return <GithubLoginButton />;
  }

  return (
    <>
      Welcome {session.user?.name}!
      <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Home;
