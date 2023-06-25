const prefix = '--';

const parseArgs = () => {
    const args = process.argv.reduce((prev, curr, i, array) => {
        if (curr.includes(prefix)) {
            const format = `${curr.slice(2)} is ${array[i + 1]}`;
            return [...prev, format];
        }
            return prev;
    }, []);
    console.log(args.join(', '));
};

parseArgs();