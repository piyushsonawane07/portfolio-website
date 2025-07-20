interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`${className} text-xs
     bottom-0 z-20 w-full p-4 border-gray-200 shadow md:p-6 border-0 `}
    >
      <p className="text-md text-gray-800 text-center  dark:text-gray-400">
       © 2025 Piyush Sonawane. All rights reserved.
      </p>
      <p>
      </p>
    </footer>
  );
};

export default Footer;
