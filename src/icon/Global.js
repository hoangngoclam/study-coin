const GlobalIcon = () => {
  return (
    <svg
      class='w-5 h-5 text-sky-600 cursor-pointer hover:text-sky-700'
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='10'></circle>
      <line x1='2' y1='12' x2='22' y2='12'></line>
      <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
    </svg>
  );
};

export default GlobalIcon;