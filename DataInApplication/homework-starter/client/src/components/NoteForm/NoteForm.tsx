import { FormField } from "../FormField";
import { Button } from "../Button";
import "./NoteForm.css";
import { FC, FormEventHandler, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createNote } from "../../api/Note";
import { queryClient } from "../../api/queryClient";

export interface INoteFormProps {}

export const NoteForm: FC<INoteFormProps> = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const createNoteMutation = useMutation(
    {
      mutationFn: () => createNote(title, text),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["notes"] });
      },
    },
    queryClient
  );
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    createNoteMutation.mutate();
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <FormField label="Заголовок">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
        />
      </FormField>
      <FormField label="Текст">
        <textarea 
          value={text}
          onChange={event => setText(event.currentTarget.value)}
        />
      </FormField>
      <Button type="submit" isLoading={createNoteMutation.isPending}>Сохранить</Button>
    </form>
  );
};
