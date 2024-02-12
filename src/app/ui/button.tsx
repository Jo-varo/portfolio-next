interface Props {
  type: "button" | "submit" | "reset"
  text: string;
  onClick?: () => void;
}

export default function Button({ type, text, onClick }: Props) {
  return (
    <button
      className="border p-1 px-2 rounded hover:bg-zinc-700 capitalize text-gray-300 transition-[background]" type={type} onClick={onClick}
    >
      {text}
    </button>
  );
}
