import _ from "lodash";

export function Paginate(items, pageSize, page) {
  const startIndex = (page - 1) * 4;
  return _(items).slice(startIndex).take(pageSize).value();
}
