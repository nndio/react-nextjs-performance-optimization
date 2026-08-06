import { useMutation } from "@tanstack/react-query";

import { Button } from "../Button";
import { logout } from "../../api/User";
import { queryClient } from "../../api/queryClient";

import "./LogoutButton.css";

export const LogoutButton = () => {
  const logoutMutation = useMutation(
    {
      mutationFn: logout,

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["users", "me"],
        });

        queryClient.invalidateQueries({
          queryKey: ["notes"],
        });
      },
    },
    queryClient,
  );

  return (
    <div className="logout-button">
      <Button
        kind="secondary"
        isLoading={logoutMutation.isPending}
        onClick={() => logoutMutation.mutate()}
      >
        Выйти
      </Button>
    </div>
  );
};