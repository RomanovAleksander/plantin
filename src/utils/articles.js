export const getNextPageItems = (items, currentPage, itemsPerPage) => {
  return items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );
}
