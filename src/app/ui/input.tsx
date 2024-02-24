interface Props {
  id: string;
  label: string;
  className?: string;
  textarea?: boolean;
  required?: boolean;
}

export default function Input({
  id,
  label,
  className,
  textarea,
  required,
}: Props) {
  const inputClasses = `block w-full bg-neutral-950 outline outline-1 outline-zinc-500 text-white text-lg p-2 rounded focus:ring-2 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-500`;

  return (
    <div className={className}>
      <label className="block text-xl mb-2" htmlFor={id}>
        {label}
      </label>
      {textarea ? (
        <textarea
          className={inputClasses}
          rows={3}
          required={required}
          name={id}
          id={id}
          placeholder={label}
        />
      ) : (
        <input
          className={inputClasses}
          required={required}
          name={id}
          id={id}
          type="text"
          placeholder={label}
        />
      )}
    </div>
  );
}
