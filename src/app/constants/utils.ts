export const randomDigits =
  (): string => {
    return Date.now()
      .toString(36)
      .replace(/[o,O,0]+/g, '-');
  };
