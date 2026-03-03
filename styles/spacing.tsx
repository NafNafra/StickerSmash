type SpacingProps = {
  value1: number;
  value2?: number;
  value3?: number;
  value4?: number;
}

export const margin = (value: SpacingProps) => {
  if (value.value4 !== undefined) {
    // All four values: top, right, bottom, left
    return {
      marginTop: value.value1,
      marginRight: value.value2,
      marginBottom: value.value3,
      marginLeft: value.value4
    };
  } else if (value.value2 !== undefined) {
    // Two values: vertical, horizontal
    return {
      marginVertical: value.value1,
      marginHorizontal: value.value2
    };
  }
  // Single value: all sides
  return { margin: value.value1 };
};
export const padding = (value: SpacingProps) => {
  if (value.value4 !== undefined) {
    // All four values: top, right, bottom, left
    return {
      paddingTop: value.value1,
      paddingRight: value.value2,
      paddingBottom: value.value3,
      paddingLeft: value.value4
    };
  } else if (value.value2 !== undefined) {
    // Two values: vertical, horizontal
    return {
      paddingVertical: value.value1,
      paddingHorizontal: value.value2
    };
  }
  // Single value: all sides
  return { padding: value.value1 };
}
