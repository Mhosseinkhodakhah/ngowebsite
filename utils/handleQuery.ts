"use client";

interface IQuery {
  route: string;
  type?: any;
  sort?: any;
  start?: any;
  end?: any;
  search?: any;
  page?: any;
}

const handleQuery = ({
  route,
  type,
  sort,
  start,
  end,
  search,
  page,
}: IQuery) => {
  const params: string[] = [];

  if (type) params.push(`type=${type}`);
  if (sort) params.push(`sort=${sort}`);
  if (start) params.push(`start=${start}`);
  if (end) params.push(`end=${end}`);
  if (search) params.push(`search=${search}`);
  if (page) params.push(`page=${page}`);

  const queryString = params.length > 0 ? `?${params.join("&")}` : "";

  return `/${route}${queryString}`;
};

export default handleQuery;
