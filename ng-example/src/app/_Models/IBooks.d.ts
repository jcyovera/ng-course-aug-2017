declare module MyApp.Models {
    export interface IBooks{
        id: number;
        title: string;
        autor: string;
        year_published: string;
        rating: string;
        price: string;
        imgUrl: string;
    }
    export interface IOptionElement{
        id:number,
        text:string,
        value:string
    }
    /* Load filters from API -- json file -- hard code */
    export interface IBookFilter{
        sortOptions:IOptionElement[];
    }
    /* Interface for filter parameters send to API */
    export interface IBookFilterParam{
        sortBy:string;
        pageSize:string;
        pageNumber:number;
        searchText:string;
    }
}