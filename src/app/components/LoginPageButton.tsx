interface loginPageButtonProps {
  text: string;
}

export function LoginPageButton({ text }: loginPageButtonProps) {
  return (
    <button className="py-2 bg-mascots-primary-600 rounded-xl text-white  hover:bg-mascots-primary-800 active:bg-mascots-primary-500 transition-all">
      {text}
    </button>
  );
}
