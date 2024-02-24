import { iconTool } from '@/app/lib/tools';

interface Props {
  tool: string;
}

export default function ToolIcon({ tool }: Props) {
  const Icon = ({ tool }: Props) => {
    const IconTool = iconTool[tool];

    return <IconTool title={tool} className="text-orange-200 text-xl" />;
  };

  return <span>{iconTool[tool] ? <Icon tool={tool} /> : tool}</span>;
}
