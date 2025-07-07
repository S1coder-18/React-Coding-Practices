✅ AddTodo Component Breakdown
1. Created AddTodo Component
2. Functional component to manage a simple todo list UI.
3. Initialized Two State Variables using useState
    1. task: Stores the current input value from the user.
    2. todos: Holds the list of all added tasks as an array.
4. Input Field Handling
5. An input field is rendered where the value is bound to task.
6. onChange updates the task state as the user types.
7. Submit Button for Adding Task
   1. A submit button triggers the handleSubmit function on click.
8. handleSubmit Function Logic
9. Prevents default form submission.
10. Validates if input is empty and sets an error if so.
11. Appends the task to the todos array using the spread operator.
12. Clears the input and error after successful submission.
13. Rendering Todo Items on UI
14. Uses .map() to loop through todos and render each task.
15. Delete Button Implementation (Inside .map())
16. Each todo item has a delete button next to it.
17. index is used as the key and passed to the handleDelete function.
18. handleDelete Function Logic
19. Filters out the selected task using index comparison.
20. Updates the todos array without the deleted item.