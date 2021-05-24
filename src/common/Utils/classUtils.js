export function classNames(...rest) {
    let classlist = [];

    rest.forEach(res => {
        if (typeof res === 'object') {
            for (let k in res) {
                if (res[k]) {
                    classlist.push(k);
                }
            }
        }
        else {
            classlist.push(res);
        }
    });

    return classlist.join(' ');
}