import React from "react";

function PostForm({ handleInputChange, handleSubmit, post }) {
  const [authors, setAuthors] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/v1/user")
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data.data.users);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={post.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={post.description}
          onChange={handleInputChange}
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <select
          className="form-select"
          value={post.author}
          name="author"
          onChange={handleInputChange}
        >
          <option value="">Select Author</option>
          {authors?.map((author) => (
            <option key={author._id} value={author._id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default PostForm;
