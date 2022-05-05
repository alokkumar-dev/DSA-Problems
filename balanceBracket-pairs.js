function runProgram(input) {
  let str = input.split("");

  if (find(str) == true) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}
function find(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (temp == "(" || temp == "{" || temp == "[") {
      stack.push(temp);
      continue;
    }

    if (stack.length == 0) {
      return false;
    }

    let check;
    switch (temp) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  // console.log(str.length)
  if (stack.length === 0) {
    return true;
  }
}
