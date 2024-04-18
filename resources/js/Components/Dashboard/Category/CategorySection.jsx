
import { useState } from 'react';

export default function CategorySection( { data } ) {

    const [categoryData, setCategoryData] = useState(data);
    const [cats, setCats] = useState(initialCats(data));

    const initialCats = (catD) => {

        return "";
    }



    return (
        <>
            Čia bus Kategorijos
        </>
    );
}