import { RequestOptions, ServerResponse } from 'http';

function mainResourceRoute(
  req: RequestOptions,
  res: ServerResponse,
  data: any,
) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  return res.end(JSON.stringify({
    success: true,
    data,
  }));
}

function notFound(_: RequestOptions, res: ServerResponse) {
  res.writeHead(404, {
    'Content-Type': 'application/json',
  });

  return res.end(JSON.stringify({
    success: false,
    error: 'Resource not found',
  }));
}

interface RouterProps {
  [key: string]: any;
  resource: string;
}

export function router(
  req: RequestOptions,
  res: ServerResponse,
  {
    data,
    resource,
  }: RouterProps,
) {
  switch (res.req.url) {
    case '/': mainResourceRoute(req, res, data);
      break;

    case `/${resource}`: mainResourceRoute(req, res, data);
      break;

    default: notFound(req, res);
      break;
  }
}
