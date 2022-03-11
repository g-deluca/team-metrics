import GithubOutlined from "@ant-design/icons/GithubOutlined";

import { Button } from "antd";
import { signIn } from "next-auth/client";

function GithubLoginButton(): JSX.Element {
  return (
    <Button icon={<GithubOutlined />} onClick={() => signIn("github")}>
      Sign in with GitHub
    </Button>
  );
}

export default GithubLoginButton;
