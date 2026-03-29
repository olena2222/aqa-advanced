function devide(numerator, denominator) {

    if (denominator === 0) {
        throw new Error("Division by zero is not allowed");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Enter a number");
    }
    return numerator / denominator;
}


try {
    const result1 = devide("lklk", 10);
    console.log(result1);
} catch (error) {
    console.error("an error appears: ", error.message)
}
finally {
    console.log("The work is done")
}

try {
    const result2 = devide(4, 0);
    console.log(result2);
} catch (error) {
    console.error("an error appears: ", error.message)
}
finally {
    console.log("The work is done")
}

try {
    const result3 = devide(12, 10);
    console.log(result3);
} catch (error) {
    console.error("an error appears: ", error.message)
}
finally {
    console.log("The work is done")
}

try {
    const result4 = devide(0, 10);
    console.log(result4);
} catch (error) {
    console.error("an error appears: ", error.message)
}
finally {
    console.log("The work is done")
}

try {
    const result5 = devide(undefined, 10);
    console.log(result5);
} catch (error) {
    console.error("an error appears: ", error.message)
}
finally {
    console.log("The work is done")
}
