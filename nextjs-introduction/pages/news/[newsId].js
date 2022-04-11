import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  console.log(router);
  const newsId = router.query.newsId;

  return <h1>The Detail Page{newsId}</h1>;
};

export default DetailPage;
