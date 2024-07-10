const zod = require("zod");
const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const updateTodo = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodoSchema: createTodoSchema,
    updateTodo: updateTodo,
};
