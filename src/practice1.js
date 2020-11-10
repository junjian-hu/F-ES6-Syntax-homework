const parseData = (DATA) => {
    var keys = [];
    var output = [];
    for(const tmp of DATA.column){
        let { name } = tmp;
        keys.push(name);
    }

    DATA.data.forEach(element => {
        let obj = {};
        if(keys.length == element.length){
            for(let i = 0; i< keys.length;i++){
                obj[keys[i]] = element[i];
            }
        }else{
            throw new Error();
        }

        output.push(obj);

    });
    return output;

}
export { parseData };
