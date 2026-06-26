import { cn } from "../lib/utils/cn";


const variants = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  danger: "bg-red-500 text-white",
};

const sizes = {
  sm: "text-sm px-2 py-1",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "rounded font-medium",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}