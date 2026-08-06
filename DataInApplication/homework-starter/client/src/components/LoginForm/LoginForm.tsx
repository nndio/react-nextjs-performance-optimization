import "./LoginForm.css";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { useMutation } from "@tanstack/react-query";
import { FC, FormEventHandler, useState } from "react";
import { login } from "../../api/User";
import { queryClient } from "../../api/queryClient";

export const LoginForm: FC = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const loginMutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users", "me"]});
    },
  }, 
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    loginMutation.mutate();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormField label="Email">
        <input 
          type="text"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </FormField>
      <FormField label="Пароль">
        <input 
          type="text" 
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </FormField>

      {loginMutation.error && <span>{loginMutation.error.message}</span>}

      <Button type="submit" title="Войти" isLoading={loginMutation.isPending} />
    </form>
  );
};
