function missingAngle(angle1, angle2) {
  let totalAng = angle1 + angle2;
  let totalVal = 180 - totalAng;

  if (totalVal < 90) {
    return "acute";
  } else if (totalVal > 90) {
    return "obtuse";
  } else if (totalVal == 90) {
    return "right";
  }
  switch (totalVal) {
    case totalVal < 90:
      return "acute";
    case totalVal > 90:
      return "obtuse";
    case totalVal == 90:
      return "right";
  }
}
