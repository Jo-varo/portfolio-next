'use client';

import Button from '@/app/ui/button';
import Input from '@/app/ui/input';

export default function Page() {
  const generateJSON = (
    evt: React.SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    evt.preventDefault();
    const submittedButton = evt.nativeEvent.submitter?.innerText;
    if (submittedButton?.toLocaleLowerCase().split(' ')[0] !== 'copy') return;

    const formData = new FormData(evt.currentTarget);
    const toJson = Object.fromEntries(formData.entries());

    const links: { repo?: string; demo?: string } = {};
    if (toJson['link-demo']) links.demo = toJson['link-demo'] as string;
    if (toJson['link-repo']) links.repo = toJson['link-repo'] as string;

    const tools = toJson['tools'] as string;

    const parsedObj = {
      id: crypto.randomUUID(),
      name: toJson['name'],
      description: toJson['description'] || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      image: toJson['image'] || '/',
      imageDescription: toJson['image-description'] || '',
      tools: tools.split(','),
      links,
    };

    navigator.clipboard
      .writeText(JSON.stringify(parsedObj))
      .then(()=>alert('Copied'))
      .catch(()=>alert('Some error at copying'));
  };

  return (
    <main>
      <form
        className="mx-auto max-w-[800px] px-10 py-8 rounded outline outline-1 outline-zinc-300"
        onSubmit={generateJSON}
      >
        <h1 className=" text-4xl mb-4">Create Project</h1>
        <Input id="name" label="Name of the project" required />
        <Input id="description" label="Description of the project" required />
        <Input id="image" label="Image of the project" required />
        <Input id="image-description" label="Image description" />
        <Input id="tools" label="Tools used in the project" />
        <Input id="link-repo" label="Project's link repository" />
        <Input id="link-demo" label="Project's link demo" />
        <div className="flex justify-around w-2/3 mx-auto">
          <Button type="reset" text="reset" />
          <Button type="submit" text="copy json values" />
          <Button type="submit" text="create project" />
        </div>
      </form>
    </main>
  );
}
