import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const enum errorMesage {
    required = 'This field is required!',
    minLen = 'Minimum field length character: ',
    maxLen = 'Maximum field length character: ',
    isLink = 'This field is a link',
    noMatch = 'The value in this field does not match the format!'
}

interface IValidate {
    element: any,
    value?: string | number | object | Array<string> | null | undefined
    required?: boolean,
    minLenght?: number,
    maxLenght?: number
}

interface validateSlice {
    isValidate: boolean,
    projectError: string,
    nameError: string,
    titleError: string,
    descriptionError: string,
    categoryError: string,
    tagsError: string,
    forumError: string,
    websiteError: string,
    compretitorError: string,
    questionError: string,
    startDateError: string,
    closeDateError: string,
    logoError: string,
    imagesError: string,
    keyError: string,
}

const initialState: validateSlice = {
    isValidate: false,
    projectError: '',
    nameError: '',
    titleError: '',
    descriptionError: '',
    categoryError: '',
    tagsError: '',
    forumError: '',
    websiteError: '',
    compretitorError: '',
    questionError: '',
    startDateError: '',
    closeDateError: '',
    logoError: '',
    imagesError: '',
    keyError: '',
}

export const validateSlice = createSlice({
    name: 'ValidateSlice',
    initialState,
    reducers: {
        validateField(state, action: PayloadAction<IValidate>) {
            const urlRegexp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
            const typeFormsRegexp = /^#[A-Za-z0-9]{8,8}$/
            if (action.payload.element) {
                const { element, required, maxLenght, minLenght, value } = action.payload
                const thisElement = element.target
                switch (element) {
                    case 'project':
                        if (required && value == '') {
                            state.projectError = errorMesage.required
                        } else {
                            state.projectError = ''
                        }
                        break
                    case 'name':
                        if (required && value == '') {
                            state.nameError = errorMesage.required
                        } else if (minLenght && value && value.toString().length !== 0 && value.toString().length < minLenght) {
                            state.nameError = errorMesage.minLen + minLenght
                        } else if (maxLenght && value && value.toString().length !== 0 && value.toString().length > maxLenght) {
                            state.nameError = errorMesage.maxLen + maxLenght
                        } else {
                            state.nameError = ''
                        }
                        break
                    case 'title':
                        if (required && value == '') {
                            state.titleError = errorMesage.required
                        } else if (minLenght && value && value.toString().length !== 0 && value.toString().length < minLenght) {
                            state.titleError = errorMesage.minLen + minLenght
                        } else if (maxLenght && value && value.toString().length !== 0 && value.toString().length > maxLenght) {
                            state.titleError = errorMesage.maxLen + maxLenght
                        } else {
                            state.titleError = ''
                        }
                        break
                    case 'description':
                        if (required && value == '') {
                            state.descriptionError = errorMesage.required
                        } else if (minLenght && value && value.toString().length !== 0 && value.toString().length < minLenght) {
                            state.descriptionError = errorMesage.minLen + minLenght
                        } else if (maxLenght && value && value.toString().length !== 0 && value.toString().length > maxLenght) {
                            state.descriptionError = errorMesage.maxLen + maxLenght
                        } else {
                            state.descriptionError = ''
                        }
                        break
                    case 'categories':
                        if (required && (value == '' || value == -1)) {
                            state.categoryError = errorMesage.required
                        } else {
                            state.categoryError = ''
                        }
                        break
                    case 'tags':
                        if (required && (value == '' || value == -1)) {
                            state.tagsError = errorMesage.required
                        } else {
                            state.tagsError = ''
                        }
                        break
                    case 'forum_url':
                        if (required && value == '') {
                            state.forumError = errorMesage.required
                        } else if (minLenght && value && value.toString().length !== 0 && value.toString().length < minLenght) {
                            state.forumError = errorMesage.minLen + minLenght
                        } else if (maxLenght && value && value.toString().length !== 0 && value.toString().length > maxLenght) {
                            state.forumError = errorMesage.maxLen + maxLenght
                        } else if (!urlRegexp.test(String(value))) {
                            state.forumError = errorMesage.isLink
                        } else {
                            state.forumError = ''
                        }
                        break
                    case 'url':
                        if (required && value == '') {
                            state.websiteError = errorMesage.required
                        } else if (minLenght && value && value.toString().length !== 0 && value.toString().length < minLenght) {
                            state.websiteError = errorMesage.minLen + minLenght
                        } else if (maxLenght && value && value.toString().length !== 0 && value.toString().length > maxLenght) {
                            state.websiteError = errorMesage.maxLen + maxLenght
                        } else if (!urlRegexp.test(String(value))) {
                            state.websiteError = errorMesage.isLink
                        } else {
                            state.websiteError = ''
                        }
                        break
                    case 'typeform_competitor_popup':
                        if (required && value == '') {
                            state.compretitorError = errorMesage.required
                        } else if (minLenght && value && value.toString().length !== 0 && value.toString().length < minLenght) {
                            state.compretitorError = errorMesage.minLen + minLenght
                        } else if (maxLenght && value && value.toString().length !== 0 && value.toString().length > maxLenght) {
                            state.compretitorError = errorMesage.maxLen + maxLenght
                        } else if (!typeFormsRegexp.test(String(value))) {
                            state.compretitorError = errorMesage.noMatch
                        } else {
                            state.compretitorError = ''
                        }
                        break
                    case 'typeform_question_popup':
                        if (required && value == '') {
                            state.questionError = errorMesage.required
                        } else if (minLenght && value && value.toString().length !== 0 && value.toString().length < minLenght) {
                            state.questionError = errorMesage.minLen + minLenght
                        } else if (maxLenght && value && value.toString().length !== 0 && value.toString().length > maxLenght) {
                            state.questionError = errorMesage.maxLen + maxLenght
                        } else if (!typeFormsRegexp.test(String(value))) {
                            state.questionError = errorMesage.noMatch
                        } else {
                            state.questionError = ''
                        }
                        break
                    case 'start_date':
                        if (required && value == '') {
                            state.startDateError = errorMesage.required
                        } else {
                            state.startDateError = ''
                        }
                        break
                    case 'close_date':
                        if (required && value == '') {
                            state.closeDateError = errorMesage.required
                        } else {
                            state.closeDateError = ''
                        }
                        break
                    case 'logo':
                        if (required && value == '') {
                            state.logoError = errorMesage.required
                        } else {
                            state.logoError = ''
                        }
                        break
                    case 'images':
                        if (required && value && value.toString().length <= 0) {
                            state.imagesError = errorMesage.required
                        } else {
                            state.imagesError = ''
                        }
                        break
                    case 'key':
                        if (required && value == '') {
                            state.keyError = errorMesage.required
                        } else if (minLenght && value && value.toString().length !== 0 && value.toString().length < minLenght) {
                            state.keyError = errorMesage.minLen + minLenght
                        } else if (maxLenght && value && value.toString().length !== 0 && value.toString().length > maxLenght) {
                            state.keyError = errorMesage.maxLen + maxLenght
                        } else {
                            state.keyError = ''
                        }
                        break
                    default:
                }

                if (state.projectError == '' &&
                    state.nameError == '' &&
                    state.titleError == '' &&
                    state.descriptionError == '' &&
                    state.categoryError == '' &&
                    state.tagsError == '' &&
                    state.forumError == '' &&
                    state.websiteError == '' &&
                    state.compretitorError == '' &&
                    state.questionError == '' &&
                    state.startDateError == '' &&
                    state.closeDateError == '' &&
                    state.logoError == '' &&
                    state.keyError == '' &&
                    state.imagesError == '') {
                    state.isValidate = true
                } else {
                    state.isValidate = false
                }
            }
        },
        resetValidate(state, action: PayloadAction<boolean>) {
            state.isValidate = action.payload
        },
        resetField(state) {
            state.projectError = ''
            state.nameError = ''
            state.titleError = ''
            state.descriptionError = ''
            state.categoryError = ''
            state.tagsError = ''
            state.forumError = ''
            state.websiteError = ''
            state.compretitorError = ''
            state.questionError = ''
            state.startDateError = ''
            state.closeDateError = ''
            state.logoError = ''
            state.imagesError = ''
            state.keyError = ''
            state.isValidate = false
        },
    }
})


export const { validateField, resetField, resetValidate } = validateSlice.actions
export default validateSlice.reducer;


