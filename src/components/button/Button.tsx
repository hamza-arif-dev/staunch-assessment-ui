import {
  ButtonProps as ChakraButtonProps,
  Button as ChakraButton,
} from "@chakra-ui/react";

export type ButtonProps = ChakraButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "secondary", children, ...restProps } = props;

  return (
    <ChakraButton variant={variant} {...restProps}>
      {children}
    </ChakraButton>
  );
}
