const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    const vertical = function(letters, word) {
      // looping columns
      for (let columns = 0; columns < letters[0].length; columns++) {
        let newStr = '';
        //loop rows
        for (let rows = 0; rows < letters.length; rows++) {
          newStr += letters[rows][columns];
        }
        if (newStr.includes(word)) {
          return true;
        }
      }
      return false;
    };
    return vertical(letters, word);
  };

  module.exports = wordSearch;
