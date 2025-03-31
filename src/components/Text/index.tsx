import React from "react";

const sizes ={
    textmd: "text-[18px] font-normal",
    text2xl: "text-[60px] font-normal lg:text-[60px] md:text-[52px] sm:text-[46px]",
};
export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children, 
    className = "",
    as,
    size = "textmd",
    ...restProps
}) => {
    const Component = as || "p";

    return (
        <Component
            className={`text-black-900 font-montserrat ${className} ${sizes [size as keyof typeof sizes]} `}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Text };
