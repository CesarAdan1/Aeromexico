import {
    CHARACTERS, FILTERSTUDENTS, FILTERSTAFF, FAVOURITE,
    UNFAVOURITE, AMOUNT
} from '../types'

export const characters = data => ({
    type: CHARACTERS,
    payload: data
})

export const filterStudents = students => ({
    type: FILTERSTUDENTS,
    action: students
})

export const filterStaff = staff => ({
    type: FILTERSTAFF,
    action: staff
})

export const favourite = (favourites) => ({
    type: FAVOURITE,
    action: favourites
})

export const unfavourite = (favourites) => ({
    type: UNFAVOURITE,
    action: favourites
})

