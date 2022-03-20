import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/client";

import LandingPageCard from "../components/LandingPageCard/LandingPageCard";

const Home: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    // Avoids any flash incorrect content on initial page load
    return null;
  }

  if (!session) {
    return <LandingPageCard />;
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
