import React from "react";

function useSetTitle() {
  const [title, setTitle] = React.useState();

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return setTitle;
}

export default useSetTitle;
