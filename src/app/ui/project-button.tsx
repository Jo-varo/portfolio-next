interface Props {
  href: string;
  text: string;
}

export default function ProjectButton({ href, text }: Props) {
  return (
    <a
      className="border p-1 px-2 rounded hover:bg-gray-200 hover:text-black capitalize text-gray-300"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}
