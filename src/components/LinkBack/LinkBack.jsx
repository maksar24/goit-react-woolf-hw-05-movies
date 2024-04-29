import { CustomButton } from './LinkBack.styled';

const Button = ({ children, to }) => {
  return <CustomButton to={to}>{children}</CustomButton>;
};

export default Button;
