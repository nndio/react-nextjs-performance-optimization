import { FC } from "react";
import { NoteList } from "../../api/Note";
import { NoteView } from "../NoteView";
import "./NotesListView.css";

export interface NotesListViewProps {
  noteList: NoteList;
}

export const NotesListView: FC<NotesListViewProps> = ({ noteList }) => {
  noteList.forEach(note => {
  console.log(note.title, note.createdAt);
});
  return (
    <ul className="note-list-view">
      {noteList.map((note) => (
        <li key={note.id}>
          <NoteView note={note}/>
        </li>
      ))}
    </ul>
  );
};

/*import "./NotesListView.css";
import { NoteView } from "../NoteView";

export const NotesListView = () => {
  return (
    <ul className="note-list-view">
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
    </ul>
  );
};*/
