export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",

  white: "#FFF",
  gray: "#74858C",
};

export const STYLES = {
  italic: { fontStyle: 'italic', },
  bold: { fontWeight: 'bold', },
  underline: { textDecorationLine: 'underline', },
  strikethrough: { textDecorationLine: 'line-through', },
}

export const SIZES = {
  base: 8,
  small: 10,
  font: 12,
  medium: 14,
  large: 16,
  extraLarge: 20,
  exextraLarge: 28,
};

export const LAYERS = {
  top: 0,
  second: 5,
  third: 10,
  ground: 15
}

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
