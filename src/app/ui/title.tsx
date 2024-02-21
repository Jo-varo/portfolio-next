export default function TitleShine({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#b5b5b5,45%,#324462,55%,#b5b5b5)] bg-[length:250%_100%] bg-clip-text text-5xl text-transparent uppercase'>
      {children}
    </span>
  );
}
