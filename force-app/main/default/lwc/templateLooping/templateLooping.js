import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {

    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"]

    ceoList = [

        {
            id:1,
            company:"Google",
            name:"Sundar Pinchai"
        },
        {
            id:2,
            company:"Apple",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"Facebook",
            name:"Mark Z"
        },
        {
            id:4,
            company:"Amazon",
            name:"Jeff Bezos"
        }




    ]

}