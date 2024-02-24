'use client';

import Button from '@/app/ui/button';
import Input from '@/app/ui/input';
import SelectTool from '@/app/ui/select-tool';

export default function Page() {
  const generateJSON = (
    evt: React.SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    evt.preventDefault();
    const submittedButton = evt.nativeEvent.submitter?.innerText;
    if (submittedButton?.toLocaleLowerCase().split(' ')[0] !== 'copy') return;

    const formData = new FormData(evt.currentTarget);
    const FDtoJson = Object.fromEntries(formData.entries());

    console.log(formData.getAll('tool'))

    const links: { repo?: string; live?: string } = {};
    if (FDtoJson['link-repo']) links.repo = FDtoJson['link-repo'] as string;
    if (FDtoJson['link-live']) links.live = FDtoJson['link-live'] as string;

    const parsedObj = {
      id: crypto.randomUUID(),
      name: {
        en: FDtoJson['name-en'],
        es: FDtoJson['name-es'],
      },
      description: {
        en: FDtoJson['description-en'] || '',
        es: FDtoJson['description-es'] || '',
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      image: FDtoJson['image'] || '/',
      imageDescription: FDtoJson['image-description'] || '',
      tools: formData.getAll('tools'),
      links,
    };

    navigator.clipboard
      .writeText(JSON.stringify(parsedObj))
      .then(() => alert('Copied'))
      .catch(() => alert('Some error at copying'));
  };

  return (
    <main>
      <form
        className="mx-auto max-w-[800px] px-6 py-8 rounded outline outline-1 outline-zinc-300"
        onSubmit={generateJSON}
      >
        <h1 className="text-4xl mb-4 font-bold">Create Project</h1>
        <div className="outline outline-1 outline-zinc-700 rounded p-2 mb-4">
          <h2 className="text-2xl font-bold">Name of the project</h2>
          <div className="flex gap-x-4">
            <Input
              id="name-en"
              label="Name (English)"
              className="flex-1"
              required
            />
            <Input
              id="name-es"
              label="Name (Spanish)"
              className="flex-1"
              required
            />
          </div>
        </div>
        <div className="outline outline-1 outline-zinc-700 rounded p-2 mb-4">
          <h2 className="text-2xl font-bold">Description of the project</h2>
          <div className="flex gap-x-4">
            <Input
              textarea
              id="description-en"
              label="Description (English)"
              className="flex-1"
              required
            />
            <Input
              textarea
              id="description-es"
              label="Description (Spanish)"
              className="flex-1"
              required
            />
          </div>
        </div>
        <Input
          id="image"
          className="mb-4"
          label="Image of the project"
          required
        />
        <Input
          textarea
          className="mb-4"
          id="image-description"
          label="Image description"
        />
        <SelectTool />
        <Input
          id="link-repo"
          className="mb-4"
          label="Project's link repository"
        />
        <Input className="mb-4" id="link-live" label="Project's link demo" />
        <div className="flex justify-around w-2/3 mx-auto">
          <Button type="reset" text="reset" />
          <Button type="submit" text="copy json values" />
          <Button type="submit" text="create project" />
        </div>
      </form>
    </main>
  );
}
