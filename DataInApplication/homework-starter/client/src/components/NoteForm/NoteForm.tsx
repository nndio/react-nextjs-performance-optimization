import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { FormField } from "../FormField";
import { Button } from "../Button";
import { createNote } from "../../api/Note";
import { queryClient } from "../../api/queryClient";

import "./NoteForm.css";

export interface INoteFormProps {}

const CreateNoteSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Введите заголовок"),

  text: z
    .string()
    .trim()
    .min(10, "Длина поста должна быть не менее 10 символов"),
});

type CreateNoteForm = z.infer<typeof CreateNoteSchema>;

export const NoteForm: FC<INoteFormProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateNoteForm>({
    resolver: zodResolver(CreateNoteSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string>();

  const createNoteMutation = useMutation(
    {
      mutationFn: ({ title, text }: CreateNoteForm) =>
        createNote(title, text),

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["notes"],
        });

        setErrorMessage(undefined);
        reset();
      },

      onError(error) {
        setErrorMessage(String(error));
      },
    },
    queryClient,
  );

  return (
    <form
      className="note-form"
      onSubmit={handleSubmit((data) => {
        createNoteMutation.mutate(data);
      })}
    >
      <FormField
        label="Заголовок"
        errorMessage={errors.title?.message}
      >
        <input
          type="text"
          {...register("title")}
        />
      </FormField>

      <FormField
        label="Текст"
        errorMessage={errors.text?.message}
      >
        <textarea {...register("text")} />
      </FormField>

      {errorMessage && (
        <span style={{ color: "red" }}>
          {errorMessage}
        </span>
      )}

      <Button
        type="submit"
        isLoading={createNoteMutation.isPending}
      >
        Сохранить
      </Button>
    </form>
  );
};