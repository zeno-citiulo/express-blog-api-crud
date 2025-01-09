const posts = require("../data/posts");

function create(req, res) {
  console.log("Dati ricevuti:", req.body);

  const newPost = req.body;
  res.status(201).json(newPost);
}

function index(req, res) {
  return res.json(posts);
}

function show(req, res) {
  const id = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  return res.json(post);
}

function create(req, res) {
  const newPost = req.body;
  
  newPost.id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  
  posts.push(newPost);
  return res.status(201).json(newPost);
}

function update(req, res) {
  const id = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const updatedPost = {
    ...posts[postIndex],
    ...req.body,
    id: posts[postIndex].id,  
  };

  posts[postIndex] = updatedPost;

  return res.json(updatedPost);
}

function destroy(req, res) {
  const id = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts.splice(postIndex, 1);

  console.log("Lista di post aggiornata:", posts);

  return res.status(204).send();
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};

function create(req, res) {
  
  console.log("Dati ricevuti:", req.body);
  const newPost = req.body;

  newPost.id = posts.length
    ? posts[posts.length - 1].id + 1
    : 1;

  posts.push(newPost);

  return res.status(201).json(newPost);
}