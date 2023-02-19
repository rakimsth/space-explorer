import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useArcanaAuth from "../utils/useArcanaAuth";

function Login() {
  const { socialLogin, loginWithMagicLink } = useArcanaAuth();
  const [email, setEmail] = useState(null);

  const handleGoogleSignIn = async () => {
    await socialLogin("google");
  };

  const handleMagicLinkLogin = async (e) => {
    const form = e.currentTarget;
    const check = form.checkValidity();
    if (!check) return;
    e.preventDefault();
    await loginWithMagicLink(email);
  };
  return (
    <>
      <Form onSubmit={handleMagicLinkLogin}>
        <div className="text-center mb-4">
          <Form.Text>
            <h1>
              Welcome To <br />
              Web3 Snake Game
            </h1>
          </Form.Text>
          <Form.Text className="text-muted">
            We will email you a magic link for you to login without password.
          </Form.Text>
        </div>
        <Form.Group className="mb-4">
          <Form.Control
            type="email"
            required
            placeholder="Enter Your Email"
            className="bg-dark text-white"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 text-center">
          <Button variant="danger" type="submit" className="w-100 text-center">
            Get Magic Link
          </Button>
        </Form.Group>
        <Form.Group className="mb-3 text-center">
          <Form.Text className="text-muted">
            <b>Or</b>
          </Form.Text>
        </Form.Group>
        <hr className="text-white" />
        <Form.Group className="mb-3 text-center">
          <Button
            variant="danger"
            type="button"
            className="w-100 text-center"
            onClick={handleGoogleSignIn}
          >
            Sign In With Google
          </Button>
        </Form.Group>
        <Form.Group className="mb-3 text-center">
          <div>
            <Form.Text>
              <b>
                Powered By{" "}
                <a href="https://arcana.network" target="_blank">
                  <img src="https://auth-icons.s3.ap-south-1.amazonaws.com/arcana-logo.png" />
                </a>
              </b>
            </Form.Text>
          </div>
        </Form.Group>
      </Form>
    </>
  );
}

export default Login;
