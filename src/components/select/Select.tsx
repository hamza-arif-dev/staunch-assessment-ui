import ReactSelect from "react-select";

type Option = { value: string; label: string };

export type SelectProps = {
  value: string;
  onChange: (value?: string) => void;
  options: Option[];
};

export function Select(props: SelectProps) {
  const { value, options, onChange } = props;

  return (
    <ReactSelect
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          color: "black",
          fontWeight: 400,
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isSelected ? "#f5f5f5" : "white",
          color: "black",
          fontWeight: state.isSelected ? 400 : 300,
          ":active": {
            backgroundColor: "#f5f5f5",
          },
        }),
      }}
      value={{ label: value, value }}
      onChange={(option: Option | null) => onChange(option?.value)}
      options={options}
    />
  );
}
