function reduceTitle(title, maxChars) {
  const trimmedTitle = title.trim();

  if (trimmedTitle.length <= maxChars) {
    return trimmedTitle;
  }

  const words = trimmedTitle.split(" ");

  const reducedTitleArr = words.reduce((acc, word) => {
    if (acc.join(" ").length + word.length + 1 <= maxChars) {
      acc.push(word);
    }
    return acc;
  }, []);

  return reducedTitleArr.join(" ");
}

export default reduceTitle;
