const textFieldTheme = {
  "& .MuiInputBase-input": {
    color: "#3d2515", // 入力文字の色
  },
  "& label": {
    color: "#CA7D45", // 通常時のラベル色
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#CA7D45", // 通常時のボーダー色
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#CA7D45", // ホバー時のボーダー色
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#dfb18f", // 通常時のボーダー色(アウトライン)
    },
    "&:hover fieldset": {
      borderColor: "#ca7d45", // ホバー時のボーダー色(アウトライン)
    },
  },
};

export default textFieldTheme;
