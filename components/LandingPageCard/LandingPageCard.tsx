import GithubLoginButton from "../GithubLoginButton/GithubLoginButton";
import styles from "./LandingPageCard.module.scss";

function LandingPageCard(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Learn from your interactions and improve your teams' equity!
      </h1>
      <p className={styles.choosePlatform}>
        Choose one the following platforms to get started:
      </p>
      <GithubLoginButton />
    </div>
  );
}

export default LandingPageCard;
