import { title } from "@/components/primitives";
import TodosTable from "@/components/todos-table";

async function fetchTodosApiCall() {
	console.log("fetchTodosApiCall called");
	const res = await fetch(`${process.env.BASE_URL}/api/todos/`, {cache: 'no-store'})
 
	const contentTypeHeaderValue = res.headers.get('Content-Type')

	if (contentTypeHeaderValue?.includes("text/html")) {
		console.log("fetchTodosApiCall / contentTypeHeaderValue", contentTypeHeaderValue);
		return null;
	}

	return res.json();
}

export default async function TodosPage() {

	const response = await fetchTodosApiCall();

	const fetchedTodos = response?.data ?? [];

	return (
		<div className="flex flex-col space-y-12">
			<h1 className={title()}>Todos</h1>
			<TodosTable todos={fetchedTodos} />
			{/* <TodosTable todos={[]}/> */}
		</div>
	);
}
