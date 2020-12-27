import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  activeClassName?: string;
}

type ActiveLinkProps = LinkProps & Props;

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName = "active",
  ...props
}) => {
  const router = useRouter();

  const className = useMemo(() => {
    if (router.pathname === props.href) {
      return activeClassName;
    }
  }, [activeClassName, router.pathname]);

  return (
    <span className={className}>
      <Link {...props}>{children}</Link>
    </span>
  );
};

export default ActiveLink;
