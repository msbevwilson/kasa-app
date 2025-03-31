import React from "react";

const shapes = {
    round: "rounded-[5px]", 
    square: "rounded-[Opx]",
} as const;
const variants = {
    fill: {
        red: "bg-red text-white-a700",
    },
} as const;
const sizes = {
    sm: "h-[52px] pl-2 pr-5 text-[18px]",
    xs: "h-[24px]",
} as const;

type ButtonProps = Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonELement>,
    "onClick"
> &
Partial<{
    className: string;
    leftIcon: React.ReactNode; 
    rightIcon: React.ReactNode; 
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
}>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon, 
    rightIcon,
    shape,
    variant = "fill",
    size = "sm",
    color = "red",
    ... restProps
}) => {
    return (
        <button
            className={`${className}
            {...restProps}
        >
            {!! leftIcon && leftIcon} 
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};
export { Button };
