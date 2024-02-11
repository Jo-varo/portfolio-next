import AuthorFooter from './footer-author';

export const Footer = () => {
  const isLight = false;
  const color = isLight ? 'bg-white text-black' : 'bg-black text-white';

  return (
    <footer
      className={`${color} border-t border-zinc-700 md:px-0 text-sm md:text-base`}
    >
      <AuthorFooter />
    </footer>
  );
};
