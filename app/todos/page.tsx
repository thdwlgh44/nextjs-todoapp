import { title } from "@/components/primitives";
import TodosTable from "@/components/todos-table";

async function fetchTodosApiCall() {
	console.log("fetchTodosApiCall called");
	const res = await fetch(`${process.env.BASE_URL}/api/todos/`, {cache: 'no-store'})
 
	const contentTypeCheck = res.headers.get('Content-Type')
	console.log("fetchTodosApiCall / contentTypeCheck", contentTypeCheck);

	return res.json();
}

export default async function TodosPage() {

	const response = await fetchTodosApiCall();

	return (
		<div className="flex flex-col space-y-12">
			<h1 className={title()}>Todos</h1>
			<TodosTable todos={response.data ?? []}/>
			{/* <TodosTable todos={[]}/> */}
		</div>
	);
}
