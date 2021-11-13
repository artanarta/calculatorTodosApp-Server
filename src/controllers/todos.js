const { Todo  } = require("../../models");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();

    res.status(200).send({
      status: 200,
      message: "Successfully get all id",
      data: todos,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;

    const todos = await Todo.findOne({ where:{ id } });

    if (todos) { 

    res.status(200).json({
      status: 200,
      message: "Get id success",
      data: {todos}
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "id doesnt exist",
    });
  }
} catch (error) {
  res.status(500).json({ 
    status: 500, 
    message: "Get id todo failed", error });
}
};

exports.postTodo = async (req, res) => {
  try {
    const todos = await Todo.create(req.body);

    res.status(200).send({
      status: 200,
      message: "Successfully Created!",
      data: todos,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const dataDeleted = await Todo.findOne({ where:{ id } });

    if (dataDeleted) { await Todo.destroy({ where:{ id } });

    res.status(200).json({
      status: 200,
      message: "Delete id success",
      data: {dataDeleted}
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "id doesnt exist",
    });
  }
} catch (error) {
  res.status(500).json({ 
    status: 500, 
    message: "Delete id failed", error });
}
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const updateOnId = await Todo.findOne({ where:{ id } });

    if (updateOnId) { await Todo.update(
      {title: req.body.title, content: req.body.content },
      {where: { id }}
    );

    const successfullyUpdate = await Todo.findOne({ where:{ id } });

    res.status(200).json({
      status: 200,
      message: "Update id success",
      data: {successfullyUpdate}
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "id doesnt exist",
    });
  }
} catch (error) {
  res.status(500).json({ 
    status: 500, 
    message: "Update id failed", error });
}
};


exports.updateStatusTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const updateOnId = await Todo.findOne({ where:{ id } });

    if (updateOnId) { await Todo.update(
      {status: req.body.status },
      {where: { id }}
    );

    const successfullyUpdate = await Todo.findOne({ where:{ id } });

    res.status(200).json({
      message: "Update id success",
      data: {successfullyUpdate}
    });
  } else {
    res.status(400).json({
      message: "id doesnt exist",
    });
  }
} catch (error) {
  res.status(500).json({ 
    status: 500, 
    message: "Update id failed", error });
}
};