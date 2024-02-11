export default function TitleShine({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-5xl text-transparent'>
      {children}
    </span>
  );
}
