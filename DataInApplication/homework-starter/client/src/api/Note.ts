import { z } from "zod";

const NoteSchema = z.object({
    id: z.string(),
    text: z.string(),
    authorId: z.string(),
    createdAt: z.number(),
});

export type Note = z.infer<typeof NoteSchema>;

export const NoteList = z.array(NoteSchema);

export type NoteList = z.infer<typeof NoteList>;