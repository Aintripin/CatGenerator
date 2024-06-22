interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  ...props
}: MyButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default MyButton;
