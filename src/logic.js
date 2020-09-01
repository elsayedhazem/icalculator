class Calculator {
  constructor() {}

  static add(...args) {
    return args.reduce((previous, current) => {
      return previous + current;
    });
  }

  static subtract(n, m) {
    return n - m;
  }

  static multiply(...args) {
    return args.reduce((previous, current) => {
      return previous * current;
    });
  }

  static divide(dividend, divisor) {
    return dividend / divisor;
  }

  static toNthPower(n, exponent) {
    return n ** exponent;
  }

  static toNthRoot(n, root) {
    return n ** (1 / root);
  }

  static toDegrees(angle) {
    return angle * (180 / Math.PI);
  }

  static toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  static sin(n) {
    return Math.sin(Calculator.toRadians(n));
  }

  static asin(n) {
    return Calculator.toDegrees(Math.asin(n));
  }

  static cos(n) {
    return Math.cos(Calculator.toRadians(n));
  }

  static acos(n) {
    return Calculator.toDegrees(Math.acos(n));
  }

  static tan(n) {
    return Math.tan(Calculator.toRadians(n));
  }

  static atan(n) {
    return Calculator.toDegrees(Math.atan(n));
  }

  static factorial(n) {
    return Math.factorial(n);
  }

  static solveQuadratic(a, b, c) {
    const discriminant = Calculator.toNthRoot(b ** 2 - 4 * a * c, 2);
    const denominator = 2 * a;

    const x1 = (-b + discriminant) / denominator;
    const x2 = (-b - discriminant) / denominator;

    return x1 === x2 ? x1 : [x1, x2];
  }

  static get pi() {
    return Math.PI;
  }

  static get e() {
    return Math.E;
  }

  static get symbolToFunc() {
    return {
      "+": Calculator.add,
      "-": Calculator.subtract,
      "/": Calculator.divide,
      x: Calculator.multiply,
    };
  }
}

function hasSyntaxError(string) {
  string = string.split("÷").join("/");

  const hasUnequalParentheses = (str) => {
    if (str.split("(").length - 1 !== str.split(")").length - 1) return true;
    // compare occurences of '(' and ')'
    else {
      return false;
    }
  };

  const hasBadCharacters = (str) => {
    const goodCharacters = "1234567890x÷/+-=π().e ".split("");
    const badCharacters = [
      "+x",
      "+/",
      "-x",
      "-/",
      "xx",
      "//",
      "..",
      "(x",
      "(/",
      "x)",
      "/)",
      "+)",
      "-)",
    ];

    for (const chars of badCharacters) if (str.includes(chars)) return true;
    for (const char of str) if (!goodCharacters.includes(char)) return true;
    return false;
  };

  const hasMisplacedSymbol = (str) => {
    const badFirstCharacters = ["x", "/"];
    const badLastCharacters = ["x", "/", "-", "+"];

    for (const char of badFirstCharacters) if (str[0] === char) return true;

    const lastIndex = str.length - 1;
    for (const char of badLastCharacters)
      if (str[lastIndex] === char) return true;
  };

  if (
    hasUnequalParentheses(string) ||
    hasBadCharacters(string) ||
    hasMisplacedSymbol(string)
  )
    return true;

  return false;
}

function reformat(string) {
  const symbolReplacements = {
    "÷": "/",
    "++": "+",
    "--": "+",
    "x+": "x",
    "/+": "/",
    "-+": "-",
    "+-": "-",
    ")(": ")x(",
    e: "(" + Calculator.e.toString() + ")",
    π: "(" + Calculator.pi.toString() + ")",
  };

  //Add x between adjacent parenthesis and numbers to indicate multiplication.
  const numbers = "0123456789".split("");
  for (const n of numbers) {
    symbolReplacements[n + "("] = n + "x" + "(";
    symbolReplacements[")" + n] = ")" + "x" + n;
  }

  if (string[0] === "+") string = string.replace("+", "");

  let requiresChanges = true;
  while (requiresChanges) {
    //loop to replace
    for (const char of Object.keys(symbolReplacements)) {
      if (string.indexOf(char) !== -1) {
        string = string.replace(char, symbolReplacements[char]);
      }
    }

    requiresChanges = false;

    //loop to check
    for (const char of Object.keys(symbolReplacements)) {
      if (string.indexOf(char) !== -1) {
        requiresChanges = true;
        break;
      }
    }
  }

  return string;
}

function calculateParenthesis(string) {
  const startIndex = string.indexOf("(");
  if (startIndex === -1) return string; //check if it has parenthesis
  const lastIndex = string.length - 1;

  let endIndex;
  let nOpen = 1;
  let nClose = 0;
  let i = startIndex + 1;
  while (i <= lastIndex) {
    if (string[i] === "(") nOpen++;
    else if (string[i] === ")") nClose++;

    if (nOpen === nClose) {
      endIndex = i;
      string = string.replace(
        string.slice(startIndex, endIndex + 1),
        calculate(string.slice(startIndex + 1, endIndex))
      );
      string = calculateParenthesis(string);
      break;
    }
    i++;
  }

  return string;
}

function calculateExp(string) {}

function multiplyDivide(string) {
  if (string.indexOf("x") === -1 && string.indexOf("/") === -1) return string; // return if no x or / in expression

  //convert string to array with elements of x, /, +, or a number
  const toArray = (str) => {
    const symbols = ["x", "/", "+"];
    let temp = "";
    const arr = [];
    for (let i in str) {
      if (symbols.indexOf(str[i]) !== -1) {
        arr.push(temp);
        temp = str[i];
        arr.push(temp);
        temp = "";
      } else {
        if (str[i] === "-") {
          temp !== "" && arr.push(temp);
          temp = "-";
          continue;
        }
        temp += str[i];
        Number(i) === str.length - 1 && arr.push(temp);
      }
    }

    return arr;
  };
  let arr = toArray(string);

  //find first occurence of multiplication or division and its index
  let symbolIndex;
  let symbol;

  const [firstMulIndex, firstDivideIndex] = [
    arr.indexOf("x"),
    arr.indexOf("/"),
  ];
  if (firstMulIndex === -1) [symbolIndex, symbol] = [firstDivideIndex, "/"];
  else if (firstDivideIndex === -1)
    [symbolIndex, symbol] = [firstMulIndex, "x"];
  else
    [symbolIndex, symbol] = [
      firstMulIndex < firstDivideIndex ? firstMulIndex : firstDivideIndex,
      firstMulIndex < firstDivideIndex ? "x" : "/",
    ];

  //get the terms before and after the symbol, perform corresponding operation on them, replace terms and symbol with ans.
  const func = Calculator.symbolToFunc[symbol];
  const [x, y] = [arr[symbolIndex - 1], arr[symbolIndex + 1]];
  const ans = func(Number(x), Number(y));

  arr.splice(symbolIndex - 1, 2);
  arr[symbolIndex - 1] = String(ans);

  return multiplyDivide(arr.join(""));
}

function addSubtract(string) {
  const symbols = ["-", "+"];
  let temp = "";
  let arr = [];
  for (let i in string) {
    if (symbols.indexOf(string[i]) !== -1) {
      if (temp === "") temp = string[i];
      else {
        arr.push(temp);
        temp = string[i];
      }
    } else {
      temp += string[i];
      Number(i) === string.length - 1 && arr.push(temp);
    }
  }

  arr.forEach(function (string, index) {
    this[index] = Number(string);
  }, arr);

  if (arr.length === 1) return String(arr[0]);
  else return String(arr.reduce((a, b) => a + b));
}

export function calculate(str) {
  if (str.trim() === "") return "";
  str = str.split(" ").join(""); //SPACES REMOVED
  if (hasSyntaxError(str)) return "Syntax Error";

  str = reformat(str);
  str = calculateParenthesis(str);
  // str = calculateExp(str);
  str = multiplyDivide(str);
  str = addSubtract(str);

  if (str === "NaN") return "Error";
  if (str === "Infinity") return "Math Error";
  return str;
}
