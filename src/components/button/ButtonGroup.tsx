import {
  ButtonGroupProps as ChakraButtonGroupProps,
  ButtonGroup as ChakraButtonGroup,
} from "@chakra-ui/react";

export type ButtonGroupProps = ChakraButtonGroupProps;

export function ButtonGroup(props: ButtonGroupProps) {
  const { spacing = 3, children, ...restProps } = props;

  return (
    <ChakraButtonGroup spacing={spacing} {...restProps}>
      {children}
    </ChakraButtonGroup>
  );
}
