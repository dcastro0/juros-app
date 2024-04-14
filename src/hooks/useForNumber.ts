const useForNumber = (data: Record<string, string>) => {
  for (const i in data) {
    const dataReturn: Record<string, number> = {};
    if (typeof data[i] === "string") {
      dataReturn[i] = parseFloat(data[i]);
    }
  }
};

export { useForNumber };
