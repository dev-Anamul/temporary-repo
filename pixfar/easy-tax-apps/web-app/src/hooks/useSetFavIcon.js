import React from "react";

function useSetFavIcon() {
  const [favIcon, setFavIcon] = React.useState("");

  React.useEffect(() => {
    document.querySelector('link[rel="icon"]').href = favIcon;
  }, [favIcon]);

  return setFavIcon;
}

export default useSetFavIcon;
