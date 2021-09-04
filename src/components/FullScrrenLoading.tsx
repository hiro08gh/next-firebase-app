type Props = {
  children: React.ReactNode;
};

export const FullScreenLoading: React.VFC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
