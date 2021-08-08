import React, { useEffect, useState } from 'react';
//import SketchFrame from './SketchFrame';
import { drawings,categories } from './drawings.js';
//import { useParams } from 'react-router';
import DescriptionCard from "./DescriptionCard";

function FilterPage() {
    //let { id }  = useParams();
    const defaultState = Object.fromEntries(categories.map(cat => {return [cat,false] }));
    const [filterTags,setFilterTags] = useState(defaultState);
    const [filteredDrawings,setDrawings] = useState(drawings);


    useEffect(() => {
        // Update the document title using the browser API
        document.title = `This is a filtering page`;
    });

    return <div className={"FilterPage"}>
        <Filter filterObject={filterTags} setFilter={setFilterTags}/>
        <div className={"FilterButtonsContainer"}>
            <button className={"FilterButtons"} onClick={() => {filterList(setDrawings,filterTags,anyMatch)}}>filter on any</button>
            <button className={"FilterButtons"} onClick={() => {filterList(setDrawings,filterTags,allMatch)}}>filter on all</button>
        </div>
        <div className={"FilteredList"}>
            {filteredDrawings.map(draw => {
                return <a href={".#/post/"+(draw.id)} key={draw.id}>
                    <DescriptionCard description={draw.description}/>
                </a>
            })}
        </div>
    </div>;
}

const anyMatch = (array1, array2) => {
    return array2.length === 0 || array1.filter(value => array2.includes(value)).length > 0;
};

const allMatch = (array1, array2) => {
    return array2.length === 0 || array2.filter(value => array1.includes(value)).length === array2.length;
};

const filterList = (setting, tags, matching) => {
    const activeTags = Object.keys(tags).filter(t => tags[t]);
    console.log(activeTags);
    const l = drawings.filter(d => matching(d.categories,activeTags));
    setting(l);
    console.log(tags);
};

function Filter({filterObject,setFilter}) {
    //useFilter(setList,filterObject);

    const handleClick = (e) => {
        let filterCopy = filterObject;
        filterCopy[e.target.id] = e.target.checked;
        setFilter(filterCopy);
        //console.log(filterCopy);
        //console.log(filterObject);
        console.log(e.target.id + ", " + e.target.checked);
    };

    return <div className={"Filter"}> {categories.map(tag => {
        return (
        <div className={"FilterFelt"} key={tag}>
            <label htmlFor={tag}>
                <input type="checkbox" id={tag} name={tag} value={tag} onClick={(e) => {
                    handleClick(e)
                }}/>
                {tag}
            </label>
        </div>
        )})}
    </div>
}

export default FilterPage;