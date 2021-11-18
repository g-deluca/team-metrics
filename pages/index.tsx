import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/client";

const Home: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    // Avoids any flash incorrect content on initial page load
    return null;
  }

  if (!session) {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
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
