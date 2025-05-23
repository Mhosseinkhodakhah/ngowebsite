"use client";

function ClientDiv({ data }: { data: any }) {
  console.log("data", data);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: data.ruDescription }}
      className="max-w-screen-lg"
    />
  );
}

export default ClientDiv;
