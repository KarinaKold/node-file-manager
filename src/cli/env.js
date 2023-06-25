const prefix = 'RSS_';

const parseEnv = () => {
    const keys = Object.entries(process.env).filter(([key, _]) => key.includes(prefix));
    const variables = keys.map((entry) => entry.join('=')).reverse().join('; ');
    console.log(variables);
};

parseEnv();