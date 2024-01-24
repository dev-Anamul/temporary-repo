interface TodoItemProps {
  completed: boolean;
  onRemove: () => void;
  text: string;
  handleCheck: () => void;
}

const TodoItem = ({
  completed,
  onRemove,
  text,
  handleCheck,
}: TodoItemProps) => {
  return (
    <div className="flex justify-between items-center mb-2 bg-gray-200 p-0">
      <input
        type="checkbox"
        checked={completed}
        className="checkbox-primary checkbox-md m-0 py-2 px-4 border"
        onChange={handleCheck}
      />
      <p
        className={`text-lg text-black self-start ${
          completed && "line-through"
        }`}
      >
        {text}
      </p>
      <button
        onClick={onRemove}
        className="btn btn-xs btn-primary rounded-none"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
