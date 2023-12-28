import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

type CustomHeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

const components = {
  h1: (props: CustomHeadingProps) => <h1 className="blogH1" {...props} />,
  h2: (props: CustomHeadingProps) => <h2 className="blogH2" {...props} />,
  h3: (props: CustomHeadingProps) => <h3 className="blogH3" {...props} />,
  h4: (props: CustomHeadingProps) => <h4 className="blogH4" {...props} />,
  h5: (props: CustomHeadingProps) => <h5 className="blogH5" {...props} />,
  h6: (props: CustomHeadingProps) => <h6 className="blogH6" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="blogP" {...props} />
  ),
  Image,
};

interface MdxProps {
  code: string;
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
};

export default Mdx;
