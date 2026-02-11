import classNames from "classnames";
import { ElementType } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps = Omit<React.HTMLAttributes<HTMLHeadingElement>, "className"> & {
    as?: HeadingLevel;
    dataTestId?: string;
}

const titleStyles = (level: HeadingLevel) => classNames({
    "text-4xl font-bold": level === "h1",
    "text-3xl font-semibold": level === "h2",
    "text-2xl font-medium": level === "h3",
    "text-xl font-normal": level === "h4",
    "text-lg font-light": level === "h5",
    "text-base font-thin": level === "h6",
})

export const Title = (props: TitleProps) => {
    const { as: _as, dataTestId, children, ...rest } = props;
    const as = _as || "h1";
    const Component = (as) as ElementType;

    const classes = titleStyles(as);

    return (
        <Component data-testid={dataTestId} className={classes} {...rest}>
            {children}
        </Component>
    );
}

Title.nameSpace = "Title";