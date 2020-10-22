### create layout
3 components

1/ restaurant name , location, info

2/ menus
    ///if local storage else api
    1. Appetizers
        heading
            8 items
    2. Lunch
        heading
            8 items
    3. Main Courses
        heading
            15 items
    4. Sides
        heading
            8 items
    5. Desserts
        heading
            3 items
3/ footer




App controls state
    calls API


    in componentdidmount () {
//whole time a loading symbol is showing//
    if (!localstorage) {
        call API until i have at least 50 items
        setState( to send to localstorage)
    }

    component didupdate when you set state it will automatically write to local storage
    }