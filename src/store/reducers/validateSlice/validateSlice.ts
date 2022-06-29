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
    value?: string | object
    required?: boolean,
    minLenght?: number,
    maxLenght?: number
}

interface validateSlice {
    isValidate: boolean,
    nameError: string,
    titleError: string,
    descriptionError: string,
    categoryError: string,
    forumError: string,
    websiteError: string,
    compretitorError: string,
    questionError: string,
}

const initialState: validateSlice = {
    isValidate: false,
    nameError: '',
    titleError: '',
    descriptionError: '',
    categoryError: '',
    forumError: '',
    websiteError: '',
    compretitorError: '',
    questionError: '',
}

export const validateSlice = createSlice({
    name: 'ValidateSlice',
    initialState,
    reducers: {
        validateField(state, action: PayloadAction<IValidate>) {
            const urlRegexp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
            const typeFormsRegexp = /^#[A-Za-z0-9]{8,8}$/
            if (action.payload.element) {
                const { element, required, maxLenght, minLenght } = action.payload
                const thisElement = element.target
                switch (thisElement.name) {
                    case 'name':
                        if (required && thisElement.value == '') {
                            state.nameError = errorMesage.required
                        } else if (minLenght && thisElement.value.length < minLenght) {
                            state.nameError = errorMesage.minLen + minLenght
                        } else if (maxLenght && thisElement.value.length > maxLenght) {
                            state.nameError = errorMesage.maxLen + maxLenght
                        }
                        else {
                            state.nameError = ''
                        }
                        break
                    case 'title':
                        if (required && thisElement.value == '') {
                            state.titleError = errorMesage.required
                        } else if (minLenght && thisElement.value.length < minLenght) {
                            state.titleError = errorMesage.minLen + minLenght
                        } else if (maxLenght && thisElement.value.length > maxLenght) {
                            state.titleError = errorMesage.maxLen + maxLenght
                        } else {
                            state.titleError = ''
                        }
                        break
                    case 'description':
                        if (required && thisElement.value == '') {
                            state.descriptionError = errorMesage.required
                        } else if (minLenght && thisElement.value.length < minLenght) {
                            state.descriptionError = errorMesage.minLen + minLenght
                        } else if (maxLenght && thisElement.value.length > maxLenght) {
                            state.descriptionError = errorMesage.maxLen + maxLenght
                        } else {
                            state.descriptionError = ''
                        }
                        break
                    case 'categories':
                        if (required && thisElement.value == '') {
                            state.categoryError = errorMesage.required
                        } else {
                            state.categoryError = ''
                        }
                        break
                    case 'forum_url':

                        if (required && thisElement.value == '') {
                            state.forumError = errorMesage.required
                        } else if (minLenght && thisElement.value.length < minLenght) {
                            state.forumError = errorMesage.minLen + minLenght
                        } else if (maxLenght && thisElement.value.length > maxLenght) {
                            state.forumError = errorMesage.maxLen + maxLenght
                        } else if (!urlRegexp.test(String(thisElement.value))) {
                            state.forumError = errorMesage.isLink
                        } else {
                            state.forumError = ''
                        }
                        break
                    case 'url':
                        if (required && thisElement.value == '') {
                            state.websiteError = errorMesage.required
                        } else if (minLenght && thisElement.value.length < minLenght) {
                            state.websiteError = errorMesage.minLen + minLenght
                        } else if (maxLenght && thisElement.value.length > maxLenght) {
                            state.websiteError = errorMesage.maxLen + maxLenght
                        } else if (!urlRegexp.test(String(thisElement.value))) {
                            state.websiteError = errorMesage.isLink
                        } else {
                            state.websiteError = ''
                        }
                        break
                    case 'typeform_competitor_popup':
                        if (required && thisElement.value == '') {
                            state.compretitorError = errorMesage.required
                        } else if (minLenght && thisElement.value.length < minLenght) {
                            state.compretitorError = errorMesage.minLen + minLenght
                        } else if (maxLenght && thisElement.value.length > maxLenght) {
                            state.compretitorError = errorMesage.maxLen + maxLenght
                        } else if (!typeFormsRegexp.test(String(thisElement.value))) {
                            state.compretitorError = errorMesage.noMatch
                        } else {
                            state.compretitorError = ''
                        }
                        break
                    case 'typeform_question_popup':
                        if (required && thisElement.value == '') {
                            state.questionError = errorMesage.required
                        } else if (minLenght && thisElement.value.length < minLenght) {
                            state.questionError = errorMesage.minLen + minLenght
                        } else if (maxLenght && thisElement.value.length > maxLenght) {
                            state.questionError = errorMesage.maxLen + maxLenght
                        } else if (!typeFormsRegexp.test(String(thisElement.value))) {
                            state.questionError = errorMesage.noMatch
                        } else {
                            state.questionError = ''
                        }
                        break
                    default:
                }

                if (state.nameError == '' &&
                    state.titleError == '' &&
                    state.descriptionError == '' &&
                    state.categoryError == '' &&
                    state.forumError == '' &&
                    state.websiteError == '' &&
                    state.compretitorError == '' &&
                    state.questionError == '') {
                    state.isValidate = true
                }
            }
        },
        validateSubmit(state, action: PayloadAction<IValidate>) {
            if (action.payload.element) {
                const { element, value, required } = action.payload
                switch (element) {
                    case 'name':
                        if (state.nameError !== '' || (required && value == '')) {
                            state.nameError = state.nameError ? state.nameError : errorMesage.required
                        }
                        break
                    case 'title':
                        if (state.titleError !== '' || (required && value == '')) {
                            state.titleError = state.titleError ? state.titleError : errorMesage.required
                        }
                        break
                    case 'description':
                        if (state.descriptionError !== '' || (required && value == '')) {
                            state.descriptionError = state.descriptionError ? state.descriptionError : errorMesage.required
                        }
                        break
                    case 'categories':
                        if (state.categoryError !== '' || (required && value == '')) {
                            state.categoryError = state.categoryError ? state.categoryError : errorMesage.required
                        }
                        break
                    case 'forum_url':
                        if (state.forumError !== '' || (required && value == '')) {
                            state.forumError = state.forumError ? state.forumError : errorMesage.required
                        }
                        break
                    case 'url':
                        if (state.websiteError !== '' || (required && value == '')) {
                            state.websiteError = state.websiteError ? state.websiteError : errorMesage.required
                        }
                        break
                    case 'typeform_competitor_popup':
                        if (state.compretitorError !== '' || (required && value == '')) {
                            state.compretitorError = state.compretitorError ? state.compretitorError : errorMesage.required
                        }
                        break
                    case 'typeform_question_popup':
                        if (state.questionError !== '' || (required && value == '')) {
                            state.questionError = state.questionError ? state.questionError : errorMesage.required
                        }
                        break
                    default:
                }
            }
        },
        resetValidate(state, action: PayloadAction<boolean>) {
            state.isValidate = action.payload
        },
        resetField(state) {
            state.nameError = ''
            state.titleError = ''
            state.descriptionError = ''
            state.categoryError = ''
            state.forumError = ''
            state.websiteError = ''
            state.compretitorError = ''
            state.questionError = ''
            state.isValidate = false
        },
    }
})


export const { validateField, validateSubmit, resetField, resetValidate } = validateSlice.actions
export default validateSlice.reducer;


