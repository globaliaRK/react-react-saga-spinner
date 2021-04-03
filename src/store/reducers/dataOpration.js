const initStore = {
    loading: false,
    posts: [],
    error: ""
}

export default (store = initStore, { type, data }) => {
    switch (type) {
        case "setData":
            return {
                ...store,
                loading: true,
            };

        case "setDataSuccess":
            return {
                ...store,
                loading: false,
                posts: data
            };
        case "setDataError":
            return {
                ...store,
                loading: false,
                error: "Geting Error"
            };
        default:
            return store;
    }
}