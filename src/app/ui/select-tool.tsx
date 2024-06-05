import { iconTool } from '../lib/tools';

export default function SelectTool() {
  return (
    <div className="mb-4">
      <label className="block text-xl mb-2" htmlFor={'tools'}>
        Tools
      </label>
      <select
        multiple
        name="tools"
        id="tools"
        className="block w-full bg-neutral-950 outline outline-1 outline-zinc-500 text-white text-lg p-2 rounded focus:ring-2 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-500 h-48"
      >
        {Object.keys(iconTool).map((tool) => (
          <option value={tool} key={tool}>
            {tool}
          </option>
        ))}
      </select>
    </div>
  );
}
