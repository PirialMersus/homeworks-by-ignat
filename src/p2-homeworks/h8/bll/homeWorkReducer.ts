import {InitialPeopleType} from "../HW8";

export type ActionType = {
    type: "sort" | "check"
    payload: "up" | "down" | number
}

export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            } else {
                return [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
            }
        }
        case "check": {
            return [...state.filter(people => people.age > action.payload)]
        }
        default:
            return state
    }
};