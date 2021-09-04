type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.VFC<Props> = ({ children }) => {
  return <div className="main">{children}</div>;
};
