var a, b, c;
a = prompt("Enter first number");
b = prompt("Enter second number");
c = prompt("Enter third number");
if (a == b && b == c) {
    if (a == b) {
        document.write(a);
        document.write(" = ");
        document.write(b);
    }
    if (b == c) {
        document.write(" = ");
        document.write(c);
    }
}
if (a == b && b > c) {
    if (a == b) {
        document.write(a);
        document.write(" = ");
        document.write(b);
    }
    if (b < c) {
        document.write(" > ");
        document.write(c);
    }
}
if (a > b && b == c) {
    if (a > b) {
        document.write(a);
        document.write(" > ");
        document.write(b);
    }
    if (b == c) {
        document.write(" = ");
        document.write(c);
    }
}
if (a < b && b < c) {
    if (a < b) {
        document.write(a);
        document.write(" < ");
        document.write(b);
    }
    if (b < c) {
        document.write(" < ");
        document.write(c);
    }
}
if (a > b && b < c) {
    if (a > b) {
        document.write(a);
        document.write(" > ");
        document.write(b);
    }
    if (b < c) {
        document.write(" < ");
        document.write(c);
    }
}
if (a < b && b == c) {
    if (a < b) {
        document.write(a);
        document.write(" < ");
        document.write(b);
    }
    if (b == c) {
        document.write(" = ");
        document.write(c);
    }
}
if (a < b && b > c) {
    if (a < b) {
        document.write(a);
        document.write(" < ");
        document.write(b);
    }
    if (b > c) {
        document.write(" > ");
        document.write(c);
    }
}

