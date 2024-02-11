interface Props {
  href: string;
  text: string;
}

export default function ProjectButton({ href, text }: Props) {
  return (
    <a
      className="border p-1 px-2 rounded hover:bg-zinc-700 capitalize text-gray-300 transition-[background]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}
