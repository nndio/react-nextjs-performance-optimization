import { useQuery } from "@tanstack/react-query";
import { fetchNoteList } from "../../api/Note";
import { Loader } from "../Loader";
import { queryClient } from "../../api/queryClient";
import { NotesListView } from "./NotesListView";

export const FetchNoteListView = () => {

    const notesListQuery = useQuery(
    {
        queryFn: () => fetchNoteList(),
        queryKey: ["notes"],
    },
    queryClient
);

    switch (notesListQuery.status) {
        case "pending":
            return <Loader />;

        case "success":
            return <NotesListView noteList={notesListQuery.data.list} />

        case "error":
            return (
                <div>
                    <span>Error</span>
                    <button onClick={() => notesListQuery.refetch()}>Retry</button>
                </div> 
            )
    }
};
