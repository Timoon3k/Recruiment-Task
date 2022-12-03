import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../Components/Button/Button";
import { Input } from "../../../Components/Input/Input";
import { InputWrapper, LoginWrapper } from "./Login.style";
import { Form } from "../../../Components/Form/Form";
import { Heading } from "../../../Components/Heading/Heading";
import { GameContext } from "../../../App";
import { Text } from "../../../Components/Text/Text";

const Login = () => {
  const navigate = useNavigate();
  const { name, setName } = useContext(GameContext);
  const [error, setError] = useState(false);

  const handleError = (str) => {
    if (str === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    handleError(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    handleError(name);
    navigate("/game");
  };

  return (
    <LoginWrapper>
      <Heading>Wordcloud game</Heading>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="name" />
          <Input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter your nickname here..."
            error={error}
            required
          />
          {error && (
            <Text size={".7rem"} color="red">
              Pole jest wymagane
            </Text>
          )}
        </InputWrapper>
        <Button type="submit" secondary disabled={error}>
          play
        </Button>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
