// import './_Quote.scss';

import { Button } from "@material-ui/core";
import { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../redux/quote/quoteAction";

const Quote = () => {
    const { quoteInText, author, isLoading, error } = useSelector(
        (state) => state.quoteReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);
    return (
        <>
            {isLoading ? (
                <div>Recherche d'une citation en cours...</div>
            ) : (
                <div>
                    {error && error.length !== 0 && <div>Erreur</div>}
                    <div>{quoteInText}</div>
                    <div>{author}</div>
                    <Button onClick={() => dispatch(fetchQuote())}>
                        New Quote
                    </Button>
                </div>
            )}
        </>
    );
};

export default Quote;