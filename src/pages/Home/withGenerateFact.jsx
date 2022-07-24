import React, { useState, useEffect } from "react";
import { controller } from "../../api/api";

const withGenerateFact = (Component, { apiService }) => {
  const NewComponent = ({ ...props }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = async () => {
      if (isLoading) return;
      setIsLoading(true);
      const response = await apiService();
      setData(response);
      setIsLoading(false);
    };

    useEffect(() => {
      fetchData();
    }, [apiService, props.generateNewFact]);

    if (isLoading) return "is typing...";

    return <Component {...data?.data} {...props} />;
  };

  return NewComponent;
};

export default withGenerateFact;
