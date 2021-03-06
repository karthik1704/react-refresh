import { useEffect } from "react";
import {
  useParams,
  Route,
  Link,
  Routes,
  Outlet,
  useMatch,
} from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/hooks/use-http";
import { getSingleQuote } from "../lib/lib/api";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (status === "pending")
    return (
      <div className="centered">
        {" "}
        <LoadingSpinner />
      </div>
    );

  if (error) return <p className="centered"> {error}</p>;

  if (!loadedQuote.text) return <p>No quote found!</p>;

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <div className="centered">
        <Link to="comments" className="btn--flat">
          Load Comments
        </Link>
      </div>

      <Outlet />
    </>
  );
};

export default QuoteDetail;
