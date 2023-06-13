export class PageResponse<T> {
    content! : T[]
    totalPages! : number
    totalElements! : number
    last! : boolean
    size! : number
    number! : number
}