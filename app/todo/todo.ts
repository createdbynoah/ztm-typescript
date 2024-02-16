import fs from 'fs';

const todosPath = 'todos.json';

type Todo = {
  id: number;
  task: string;
};

function getTodos(): Todo[] {
  if (!fs.existsSync(todosPath)) {
    return [];
  }

  const data = fs.readFileSync(todosPath, 'utf8');
  return JSON.parse(data) as Todo[];
}

function listTodos(): void {
  const todos: Todo[] = getTodos();
  if (todos.length === 0) {
    console.log('No todos');
    return;
  }
  for (const todo of todos) {
    console.log(`${todo.id}: ${todo.task}`);
  }
}

function saveTodos(todos: Todo[]): void {
  fs.writeFileSync(todosPath, JSON.stringify(todos));
}

function removeTodo(id: number): void {
  const todos: Todo[] = getTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    console.log(`No todo with ID ${id}`);
    return;
  }
  const removedTodo = todos.splice(index, 1)[0];
  saveTodos(todos);
  console.log(`Removed todo: ${removedTodo.id}: "${removedTodo.task}"`);
}

function addTodo(task: string): void {
  const todos: Todo[] = getTodos();
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  todos.push({ id, task });
  saveTodos(todos);
  console.log(`Added todo: ${id}: "${task}"`);
}

function cliInvalidCommand(command: string): void {
  console.error(`Invalid number of options for "${command}" command`);
}

function cli(): void {
  const [command, ...options] = process.argv.slice(2);
  switch (command) {
    case '--help':
      console.log('Usage:');
      console.log('  list: List all todos');
      console.log('  add <task>: Add a new todo');
      console.log('  remove <id>: Remove a todo by ID');
      break;
    case 'list':
      if (options.length !== 0) {
        cliInvalidCommand('list');
      } else {
        listTodos();
      }
      break;
    case 'add':
      if (options.length === 1) {
        addTodo(options[0]);
      } else {
        cliInvalidCommand('add');
      }
      break;
    case 'remove':
      if (options.length !== 1) {
        cliInvalidCommand('remove');
      } else if (isNaN(parseInt(options[0]))) {
        console.error('Invalid ID');
      } else if (parseInt(options[0]) < 1) {
        console.error('ID must be a positive number');
      } else if (parseInt(options[0]) % 1 !== 0) {
        console.error('ID must be an integer');
      } else {
        removeTodo(parseInt(options[0]));
      }
      break;
    default:
      console.error('Invalid command');
  }
}

cli();
