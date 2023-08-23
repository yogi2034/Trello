interface BoardStore {
    columns:Map<TypedColumn, String>;
}
type TypedColumn = "todo" | "in-progress" | "done";

interface Column{
    id:TypedColumn,
    todos:Todo[]
}
interface Todo{
    $id:string,
    $createAt:string,
    title:string,
    status:TypedColumn,
    image:string,
}
interface Image{
    bucketId:string,
    fileId:string;
}