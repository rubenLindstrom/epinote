export const debouce = (a, b, c) => {
  let d, e;
  return () => {
    const h = () => {
      d = null;
      c || (e = a.apply(f, g));
    };
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
};

export const removeHTMLTags = str => {
  return str.replace(/<[^>]*>?/gm, "");
};
