const inject = (items, sections) => {
    var lastPosition;
    sections.forEach(element => {
        let {content, index} = element;
        index = lastPosition <= index ? index+=1 : index;
        items.splice(index, 0, content);
        lastPosition = index;
    }); 
    return items;
}
export { inject };
