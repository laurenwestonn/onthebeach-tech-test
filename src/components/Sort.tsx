import React from 'react';

// Todo: move this to common types file
type SortType = {
    setSort: (sort: string) => void
};

function Sort(props: SortType) {
    // Todo: Use an enum in a central place to define all the ways we can sort
    const sortOptions = ['alphabetically', 'price', 'star rating'];

    return ( 
        <div className="container">
            {sortOptions.map((sortOption, i) => 
                <button key={i} onClick={() => props.setSort(sortOption)}>sort {sortOption}</button>
            )}
        </div>
    );
}

export default Sort;