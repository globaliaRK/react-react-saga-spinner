export const setData = () => {
    return {
        type: "setData",
    }
}

export const setDataSuccess = (data) => {
    return {
        type: "setDataSuccess",
        data: data
    }
}

export const setDataError = () => {
    return { type: "setDataError" }
}