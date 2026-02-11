import Link, { LinkProps } from "next/link"

type ProLinkProps = LinkProps & {
    dataTestId?: string;
    children: React.ReactNode;
}

export const ProLink = (props: ProLinkProps) => {
    const { dataTestId, children, ...rest } = props;
    return (<Link {...rest} data-testid={dataTestId} className="px-3 py-2 hover:bg-gray-700 rounded">
        {children}
    </Link>);
}