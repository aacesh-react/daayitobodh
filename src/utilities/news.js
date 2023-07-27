export const getNewsData = (homepageNews, hasSubcategory, name) => {
  return hasSubcategory
    ? homepageNews.find((value) => value.subcategoryName == name)
    : homepageNews.find((value) => value.categoryName == name);
};

export const getNews = (homepageNews, hasSubcategory, name, limit) => {
  const newsData = getNewsData(homepageNews, hasSubcategory, name);
  return newsData?.newsArray.slice(0, limit);
};

export const getCategoryNews = (
  homepageNews,
  name,
  limit,
  hasSubcategory
) => {
  const subcategoryArray = homepageNews.filter(
    (value) => value.categoryName == name
  );
  const allNews = subcategoryArray.reduce((accumulator, current) => {
    return accumulator.concat(current.newsArray);
  }, []);
  return allNews.slice(0, limit);
};

export const getCategorySubcategoryNews = (
  homepageNews,
  name,
  limit,
  hasSubcategory
) => {
  const subcategoryArray = homepageNews.filter(
    (value) => value.categoryName == name
  );
  let allNews ;
  const hasSubCategory = subcategoryArray.every(
    (value) => value.subcategoryId != null
  );
  if (hasSubCategory) {
    allNews = subcategoryArray.map((value) => {
      return { ...value, newsArray: value.newsArray.slice(0, limit) };
    });
  }

  return allNews;
};
