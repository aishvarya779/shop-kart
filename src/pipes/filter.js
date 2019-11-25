export const brandFilter = (arr, brand) => {
  if (!brand) return arr;

  return arr.filter(product => brand.includes(product.brand));
};

export const orderByFilter = (arr, type) => {
  if (!type) return arr;
  if (type === 'asc') {
    return arr.slice().sort((el1, el2) => el1.price - el2.price);
  } else {
    return arr.slice().sort((el1, el2) => el2.price - el1.price);
  }
};

export const paginationPipe = (state, args) => {
  if (!args || !args.perPage || !args.currentPage) {
    return state;
  }
  const location = args.perPage * (args.currentPage - 1) || 0;

  return state.slice(location, location + args.perPage);
};

export const formatMoney = price => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const cumulativeOffSet = element => {
  let top = 0,
    left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
};
export const shortenTitle = title => {
  return title.split(' (')[0];
};
