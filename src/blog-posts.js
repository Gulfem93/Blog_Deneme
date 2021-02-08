export const getPosts = () => {
  //const content = await require("./posts/yeni-yazi.md");
  return[
  {
    title: "Merhaba dünya!",
    slug: "merhaba",
    details: require("./posts/yeni-yazi.md").default,
    date: "1 Aralık 2019"
  },
  {
    title: `İyi bir mühendisin 10 özelliği`,
    slug: "iyi-bir-mühendis",
    details: require("./posts/iyi-bir-muhendis.md").default,
    date: `02 Şubat 2021`
  }];
};
    