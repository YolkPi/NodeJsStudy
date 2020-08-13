/**
 * An example about async and Promise chain
 */

const doWork1 = async () => {
    return 'doWork1';
}

const doWork2 = async () => {
    return 'doWork2';
}

doWork2().then(
    (result) => {
        console.log(result);
        return doWork1();
    }
).then(
    (result) => {
        console.log(result);
    }
).catch(
    (e) => {
        console.log(e);
    }
);