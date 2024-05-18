type SingleDocPageProps = {
  params: { slug: string[] };
  searchParams: Record<string, string | string[] | undefined>;
};

function SingleDocPage({ params, searchParams }: SingleDocPageProps) {
  return (
    <div>
      <h2>Hello World</h2>
      <p>This is a single doc page</p>
      <p>Params</p>
      <code>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </code>
      <p>Search Params</p>
      <code>
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </code>
    </div>
  );
}

export default SingleDocPage;

export async function generateStaticParams() {
  const staticPages = [{ params: { slug: ['hello', 'world'] } }];
  return staticPages;
}
