interface Props {
  id: string;
  label: string;
  required?: boolean;
}

export default function Input({ id, label, required }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-xl mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="block w-full bg-neutral-900 outline outline-1 outline-zinc-500 text-white text-lg p-2 rounded focus:ring-2 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-500"
        required={required}
        name={id}
        id={id}
        type="text"
        placeholder={label}
      />
    </div>
  );
}
