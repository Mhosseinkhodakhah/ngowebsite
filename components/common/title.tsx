function Title({
  titleText,
  description,
}: {
  titleText: string;
  description: string;
}) {
  return (
    <>
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {titleText}
      </h1>
      <p className="mt-5 max-w-md text-center text-secondary dark:text-gray font-light">
        {description}
      </p>
    </>
  );
}

export default Title;
